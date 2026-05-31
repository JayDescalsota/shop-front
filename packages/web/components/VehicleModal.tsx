'use client';

import { useState, useEffect } from 'react';
import { Modal, Field, FormActions, ErrorBanner } from '@autocare/ui';
import { useVehicleMakesQuery, useVehicleModelsQuery } from '../graphql/generated/hooks';

export interface VehicleForm {
  make: string;
  model: string;
  year: string;
  vin: string;
  licensePlate: string;
  color: string;
  notes: string;
}

const emptyForm: VehicleForm = {
  make: '', model: '', year: '', vin: '', licensePlate: '', color: '', notes: '',
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
}

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none';

export default function VehicleModal({ open, onClose, onSubmit, title, submitLabel, initialData, submitting, error, size }: VehicleModalProps) {
  const [form, setForm] = useState<VehicleForm>(emptyForm);
  const [selectedMakeId, setSelectedMakeId] = useState('');

  const { data: makesData } = useVehicleMakesQuery({ fetchPolicy: 'cache-first' });
  const { data: modelsData } = useVehicleModelsQuery({
    variables: { makeId: selectedMakeId },
    skip: !selectedMakeId,
    fetchPolicy: 'cache-first',
  });

  const makes = makesData?.vehicleMakes ?? [];
  const models = modelsData?.vehicleModels ?? [];

  useEffect(() => {
    if (open) {
      setForm({ ...emptyForm, ...initialData });
      setSelectedMakeId('');
    }
  }, [open, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const makeId = e.target.value;
    setSelectedMakeId(makeId);
    const make = makes.find((m) => m.id === makeId);
    setForm({ ...form, make: make?.name ?? '', model: '' });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = e.target.value;
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
          <Field label="Make" required>
            <select name="makeId" value={selectedMakeId} onChange={handleMakeChange} required className={inputClass}>
              <option value="">Select make</option>
              {makes.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Model" required>
            <select name="modelId" value="" onChange={handleModelChange} required className={inputClass} disabled={!selectedMakeId}>
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
        </div>
        <Field label="Notes">
          <Field.Textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Optional notes" />
        </Field>

        <FormActions onCancel={onClose} submitting={submitting} submitLabel={submitLabel} />
      </form>
    </Modal>
  );
}
