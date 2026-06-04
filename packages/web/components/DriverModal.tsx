'use client';

import { useState, useEffect } from 'react';
import { Modal, Field, FormActions, ErrorBanner } from '@autocare/ui';

export interface DriverForm {
  name: string;
  role: string;
  email: string;
  phone: string;
  licenseNumber: string;
  licenseClass: string;
  licenseExpiry: string;
  dateOfBirth: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  status: string;
  notes: string;
  hireDate: string;
}

const emptyForm: DriverForm = {
  name: '', role: 'driver', email: '', phone: '', licenseNumber: '', licenseClass: '', licenseExpiry: '',
  dateOfBirth: '', address: '', emergencyContact: '', emergencyPhone: '', status: 'active', notes: '', hireDate: '',
};

interface DriverModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: DriverForm) => Promise<void>;
  title: string;
  submitLabel: string;
  initialData?: Partial<DriverForm>;
  submitting?: boolean;
  error?: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg' | 'xs';
}

export default function DriverModal({ open, onClose, onSubmit, title, submitLabel, initialData, submitting, error, size }: DriverModalProps) {
  const [form, setForm] = useState<DriverForm>(emptyForm);

  useEffect(() => {
    if (open) setForm({ ...emptyForm, ...initialData });
  }, [open, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size={size ?? 'l'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorBanner message={error} />

        <div className="grid grid-cols-2 gap-4">
          <Field label="Name" required>
            <Field.Input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
          </Field>
          <Field label="Role">
            <select name="role" value={form.role} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
              <option value="driver">Driver</option>
              <option value="mechanic">Mechanic</option>
              <option value="admin_staff">Admin Staff</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Email">
            <Field.Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
          </Field>
          <Field label="Phone">
            <Field.Input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="License Number">
            <Field.Input name="licenseNumber" value={form.licenseNumber} onChange={handleChange} placeholder="DL12345678" />
          </Field>
          <Field label="License Class">
            <Field.Input name="licenseClass" value={form.licenseClass} onChange={handleChange} placeholder="Class A" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="License Expiry">
            <Field.Input name="licenseExpiry" value={form.licenseExpiry} onChange={handleChange} type="date" />
          </Field>
          <Field label="Date of Birth">
            <Field.Input name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} type="date" />
          </Field>
        </div>

        <Field label="Address">
          <Field.Input name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Emergency Contact">
            <Field.Input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} placeholder="Jane Doe" />
          </Field>
          <Field label="Emergency Phone">
            <Field.Input name="emergencyPhone" value={form.emergencyPhone} onChange={handleChange} placeholder="+1 (555) 987-6543" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Status">
            <select name="status" value={form.status} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </Field>
          <Field label="Hire Date">
            <Field.Input name="hireDate" value={form.hireDate} onChange={handleChange} type="date" />
          </Field>
        </div>

        <Field label="Notes">
          <Field.Textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Additional notes about this driver..." />
        </Field>

        <FormActions onCancel={onClose} submitting={submitting} submitLabel={submitLabel} />
      </form>
    </Modal>
  );
}
