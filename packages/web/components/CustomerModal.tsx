'use client';

import { useState, useEffect } from 'react';
import { Modal, Field, FormActions, ErrorBanner } from '@autocare/ui';

export interface CustomerForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
}

const emptyForm: CustomerForm = {
  name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', notes: '',
};

interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: CustomerForm) => Promise<void>;
  title: string;
  submitLabel: string;
  initialData?: Partial<CustomerForm>;
  submitting?: boolean;
  error?: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg' | 'xs';
}

export default function CustomerModal({ open, onClose, onSubmit, title, submitLabel, initialData, submitting, error, size }: CustomerModalProps) {
  const [form, setForm] = useState<CustomerForm>(emptyForm);

  useEffect(() => {
    if (open) setForm({ ...emptyForm, ...initialData });
  }, [open, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size={size}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorBanner message={error} />

        <Field label="Name" required>
          <Field.Input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Email">
            <Field.Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="customer@example.com" />
          </Field>
          <Field label="Phone">
            <Field.Input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
          </Field>
        </div>
        <Field label="Address">
          <Field.Input name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field label="City">
            <Field.Input name="city" value={form.city} onChange={handleChange} placeholder="City" />
          </Field>
          <Field label="State">
            <Field.Input name="state" value={form.state} onChange={handleChange} placeholder="CA" />
          </Field>
          <Field label="ZIP">
            <Field.Input name="zip" value={form.zip} onChange={handleChange} placeholder="90210" />
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
