'use client';

import { useState, useEffect, useMemo } from 'react';
import { Modal, Field, FormActions, ErrorBanner } from '@autocare/ui';
import { useServiceTypesQuery, useCreateAppointmentMutation, useCreateVehicleMutation, useUpdateVehicleMutation, useVehiclesQuery } from '../graphql/generated/hooks';
import type { CreateAppointmentInput, CreateVehicleInput, UpdateVehicleInput } from '../graphql/generated/index';

const APP_REPAIR = '00000000-0000-0000-0000-202605270002';

interface TenantInfo {
  id: string;
  name: string;
  app_id: string;
}

interface VehicleInfo {
  id: string;
  make: string;
  model: string;
  year: number | null;
  licensePlate: string;
  customerId: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  status: string;
}

interface SendToShopModalProps {
  open: boolean;
  onClose: () => void;
  vehicle: VehicleInfo | null;
}

interface ServiceLineItem {
  id: string;
  category: string;
  system: string;
  name: string;
  note: string;
}

interface FormState {
  shopId: string;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  notes: string;
}

const emptyForm: FormState = {
  shopId: '',
  scheduledDate: '',
  startTime: '',
  endTime: '',
  notes: '',
};

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none';

function getRepairTenants(): TenantInfo[] {
  if (typeof window === 'undefined') return [];
  try {
    const token = localStorage.getItem('token');
    if (!token) return [];
    const payload = JSON.parse(atob(token.split('.')[1]));
    return (payload.tenants || []).filter((t: TenantInfo) => t.app_id === APP_REPAIR);
  } catch {
    return [];
  }
}

export default function SendToShopModal({ open, onClose, vehicle }: SendToShopModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [lineItems, setLineItems] = useState<ServiceLineItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [newItemNote, setNewItemNote] = useState('');

  const [createAppointment] = useCreateAppointmentMutation();
  const [createRepairVehicle] = useCreateVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();
  const { data: svcTypesData } = useServiceTypesQuery({ fetchPolicy: 'cache-first' });

  const serviceTypes = svcTypesData?.serviceTypes ?? [];
  const repairTenants = useMemo(() => getRepairTenants(), [open]);

  useEffect(() => {
    if (open) {
      setForm(emptyForm);
      setLineItems([]);
      setSelectedCategory('');
      setSelectedSystem('');
      setSelectedName('');
      setNewItemNote('');
      setError('');
    }
  }, [open]);

  const categories = useMemo(() => {
    const cats = new Set(serviceTypes.map((s) => s.category).filter(Boolean));
    return [...cats].sort();
  }, [serviceTypes]);

  const systems = useMemo(() => {
    if (!selectedCategory) return [];
    const sys = new Set(
      serviceTypes.filter((s) => s.category === selectedCategory).map((s) => s.system).filter(Boolean),
    );
    return [...sys].sort();
  }, [serviceTypes, selectedCategory]);

  const serviceNames = useMemo(() => {
    if (!selectedCategory || !selectedSystem) return [];
    return serviceTypes
      .filter((s) => s.category === selectedCategory && s.system === selectedSystem)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [serviceTypes, selectedCategory, selectedSystem]);

  const handleAddService = () => {
    if (!selectedName) return;
    const svc = serviceNames.find((s) => s.name === selectedName);
    if (!svc) return;
    if (lineItems.some((item) => item.id === svc.id)) return;
    setLineItems([...lineItems, { id: svc.id, category: svc.category, system: svc.system, name: svc.name, note: newItemNote }]);
    setSelectedName('');
    setNewItemNote('');
  };

  const handleRemoveService = (id: string) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handleNoteChange = (id: string, note: string) => {
    setLineItems(lineItems.map((item) => (item.id === id ? { ...item, note } : item)));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle) return;
    if (vehicle.status === 'running') {
      setError('Cannot send a running vehicle to repair. Mark it as broken first.');
      return;
    }
    if (lineItems.length === 0) {
      setError('Add at least one service item.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const selectedShop = repairTenants.find((t) => t.name === form.shopId);
      if (!selectedShop) {
        setError('Selected shop not found');
        return;
      }
      const serviceSummary = lineItems.map((item) => {
        const base = `${item.category}-${item.system}: ${item.name}`;
        return item.note ? `${base} (${item.note})` : base;
      }).join('; ');
      const serviceNamesOnly = lineItems.map((item) => item.name).join(', ');
      const input: CreateAppointmentInput = {
        tenantId: selectedShop.id as any,
        customerName: vehicle.customerName || vehicle.make,
        customerPhone: vehicle.customerPhone || null,
        customerEmail: vehicle.customerEmail || null,
        vehicleMake: vehicle.make,
        vehicleModel: vehicle.model,
        vehicleYear: vehicle.year,
        vehiclePlate: vehicle.licensePlate || null,
        serviceType: serviceNamesOnly,
        description: serviceSummary,
        scheduledDate: form.scheduledDate,
        startTime: form.startTime,
        endTime: form.endTime || null,
        notes: form.notes || null,
        shopId: form.shopId || null,
      };
      const apptRes = await createAppointment({ variables: { input } });
      if (!apptRes.data?.createAppointment) {
        setError(apptRes.errors?.[0]?.message || 'Failed to create appointment');
        return;
      }
      const repairVehicleInput: CreateVehicleInput = {
        tenantId: selectedShop.id as any,
        customerId: null,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        licensePlate: vehicle.licensePlate || null,
        notes: `Source vehicle: ${vehicle.id} | ${vehicle.make} ${vehicle.model}`,
      } as CreateVehicleInput;
      const existingRes = await createRepairVehicle({ variables: { input: repairVehicleInput } });
      if (!existingRes.data?.createVehicle) {
        console.warn('Could not create repair vehicle record');
      }
      const vehicleInput: UpdateVehicleInput = {
        status: 'under_maintenance',
        repairStatus: 'in_progress',
      } as UpdateVehicleInput;
      await updateVehicle({ variables: { id: vehicle.id, input: vehicleInput } });
      onClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={`Send ${vehicle?.make ?? ''} ${vehicle?.model ?? ''} to Shop`} size="xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorBanner message={error} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Shop" required>
            <select name="shopId" value={form.shopId} onChange={handleChange} required className={inputClass}>
              <option value="">Select shop</option>
              {repairTenants.map((t) => (
                <option key={t.id} value={t.name}>{t.name}</option>
              ))}
            </select>
          </Field>
          <div />
          <Field label="Date" required>
            <input name="scheduledDate" type="date" value={form.scheduledDate} onChange={handleChange} required className={inputClass} />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Start" required>
              <input name="startTime" type="time" value={form.startTime} onChange={handleChange} required className={inputClass} />
            </Field>
            <Field label="End">
              <input name="endTime" type="time" value={form.endTime} onChange={handleChange} className={inputClass} />
            </Field>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-3">Service Items</h4>
          <div className="flex gap-3 mb-3">
            <div style={{ width: '20%' }}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Category</label>
              <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setSelectedSystem(''); setSelectedName(''); }} className={inputClass}>
                <option value="">Select category</option>
                {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div style={{ width: '20%' }}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">System</label>
              <select value={selectedSystem} onChange={(e) => { setSelectedSystem(e.target.value); setSelectedName(''); }} disabled={!selectedCategory} className={inputClass}>
                <option value="">Select system</option>
                {systems.map((sys) => <option key={sys} value={sys}>{sys}</option>)}
              </select>
            </div>
            <div style={{ width: '20%' }}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Service</label>
              <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)} disabled={!selectedSystem} className={inputClass}>
                <option value="">Select service</option>
                {serviceNames.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div style={{ width: '40%' }}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Description</label>
              <input type="text" value={newItemNote} onChange={(e) => setNewItemNote(e.target.value)}
                placeholder="Note for this item..." className={inputClass} />
            </div>
          </div>
          <button type="button" onClick={handleAddService} disabled={!selectedName}
            className="text-accent hover:underline text-xs font-semibold cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed">
            + Add Service
          </button>

          {lineItems.length > 0 && (
            <div className="mt-3 space-y-2">
              {lineItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2 bg-gray-50 rounded px-3 py-2 text-sm">
                  <span className="font-medium shrink-0">{item.category}</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-gray-600 shrink-0">{item.system}</span>
                  <span className="text-gray-400">:</span>
                  <span className="min-w-0">{item.name}</span>
                  <input type="text" value={item.note} onChange={(e) => handleNoteChange(item.id, e.target.value)}
                    placeholder="Description..." className="flex-1 rounded border border-gray-200 px-2 py-1 text-xs focus:border-blue-500 focus:outline-none" />
                  <button type="button" onClick={() => handleRemoveService(item.id)} className="text-red-500 hover:text-red-700 text-base cursor-pointer leading-none shrink-0">&times;</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Field label="Notes">
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className={inputClass} placeholder="Additional notes for the shop..." />
        </Field>
        <FormActions onCancel={onClose} submitting={submitting} submitLabel="Send to Shop" />
      </form>
    </Modal>
  );
}
