'use client';

import { useState, useEffect } from 'react';
import { Modal, Field, FormActions, ErrorBanner } from '@autocare/ui';
import { useVehicleMakesQuery, useVehicleModelsQuery, useCustomersQuery } from '../graphql/generated/hooks';

export interface VehicleForm {
  make: string;
  model: string;
  year: string;
  vin: string;
  licensePlate: string;
  color: string;
  notes: string;
  customerId: string;
  status: string;
  repairStatus: string;
}

const emptyForm: VehicleForm = {
  make: '', model: '', year: '', vin: '', licensePlate: '', color: '', notes: '', customerId: '', status: 'running', repairStatus: 'none',
};

interface VehicleModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: VehicleForm) => Promise<void>;
  title: string;
  submitLabel: string;
  initialData?: Partial<VehicleForm>;
  submitting?: boolean;
  error?: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg' | 'xs';
  hideOwner?: boolean;
}

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none';

export default function VehicleModal({ open, onClose, onSubmit, title, submitLabel, initialData, submitting, error, size, hideOwner }: VehicleModalProps) {
  const [form, setForm] = useState<VehicleForm>(emptyForm);
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');

  const { data: makesData } = useVehicleMakesQuery();
  const { data: modelsData } = useVehicleModelsQuery({ makeId: selectedMakeId }, { enabled: !!selectedMakeId });
  const { data: custData } = useCustomersQuery(undefined, { enabled: !!open });

  const makes = makesData?.vehicleMakes ?? [];
  const models = modelsData?.vehicleModels ?? [];
  const customers = custData?.customers?.items ?? [];

  useEffect(() => {
    if (open) {
      setForm({ ...emptyForm, ...initialData });
      setSelectedMakeId('');
      setSelectedModelId('');
    }
  }, [open, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const makeId = e.target.value;
    setSelectedMakeId(makeId);
    setSelectedModelId('');
    const make = makes.find((m) => m.id === makeId);
    setForm({ ...form, make: make?.name ?? '', model: '' });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = e.target.value;
    setSelectedModelId(modelId);
    const model = models.find((m) => m.id === modelId);
    setForm({ ...form, model: model?.name ?? '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size={size}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorBanner message={error} />

        <div className="grid grid-cols-2 gap-4">
          {!hideOwner && (
            <div className="col-span-2">
              <Field label="Owner">
                <select name="customerId" value={form.customerId} onChange={handleChange} className={inputClass}>
                  <option value="">Select owner</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </Field>
            </div>
          )}
          <Field label="Make" required>
            <select name="makeId" value={selectedMakeId} onChange={handleMakeChange} required className={inputClass}>
              <option value="">Select make</option>
              {makes.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Model" required>
            <select name="modelId" value={selectedModelId} onChange={handleModelChange} required className={inputClass} disabled={!selectedMakeId}>
              <option value="">Select model</option>
              {models.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Year">
            <Field.Input name="year" value={form.year} onChange={handleChange} placeholder="2020" />
          </Field>
          <Field label="Color">
            <Field.Input name="color" value={form.color} onChange={handleChange} placeholder="Silver" />
          </Field>
          <Field label="VIN">
            <Field.Input name="vin" value={form.vin} onChange={handleChange} placeholder="1HGCM82633A004352" />
          </Field>
          <Field label="License Plate">
            <Field.Input name="licensePlate" value={form.licensePlate} onChange={handleChange} placeholder="ABC-1234" />
          </Field>
          <Field label="Status">
            <select name="status" value={form.status} onChange={handleChange} className={inputClass}>
              <option value="running">Running</option>
              <option value="broken">Broken</option>
              <option value="under_maintenance">Under Maintenance</option>
              <option value="out_of_service">Out of Service</option>
            </select>
          </Field>
        </div>
        <Field label="Notes">
          <Field.Textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Optional notes" />
        </Field>

        <FormActions onCancel={onClose} submitting={submitting} submitLabel={submitLabel} />
      </form>
    </Modal>
  );
}
