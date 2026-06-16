'use client';

import { useState, useEffect } from 'react';
import { Modal, Field, FieldSet, FormActions, ErrorBanner } from '@autocare/ui';
import { useCreateAppointmentMutation } from '@/graphql/generated/hooks';
import type { CreateAppointmentInput } from '@/graphql/generated/index';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
  vehicle: {
    id: string;
    make: string;
    model: string;
    year?: number | string | null;
    licensePlate?: string;
    customerId?: string;
    customerName?: string;
    customerPhone?: string;
    customerEmail?: string;
  } | null;
}

export default function AppointmentModal({ open, onClose, vehicle }: AppointmentModalProps) {
  const [createAppointment] = useCreateAppointmentMutation();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [bay, setBay] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (open && vehicle) {
      setCustomerName(vehicle.customerName || '');
      setCustomerPhone(vehicle.customerPhone || '');
      setCustomerEmail(vehicle.customerEmail || '');
      setServiceType('');
      setDescription('');
      setScheduledDate('');
      setStartTime('');
      setEndTime('');
      setBay('');
      setNotes('');
      setError('');
    }
  }, [open, vehicle]);

  if (!vehicle) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) {
      setError('No tenant selected.');
      setSubmitting(false);
      return;
    }

    const input: CreateAppointmentInput = {
      tenantId: tid as any,
      customerName,
      customerPhone: customerPhone || null,
      customerEmail: customerEmail || null,
      vehicleMake: vehicle.make,
      vehicleModel: vehicle.model,
      vehicleYear: vehicle.year ? parseInt(String(vehicle.year)) : null,
      vehiclePlate: vehicle.licensePlate || null,
      serviceType,
      description: description || null,
      scheduledDate,
      startTime,
      endTime: endTime || null,
      assignedMechanic: null,
      bay: bay || null,
      notes: notes || null,
    };

    try {
      const res = await createAppointment({ variables: { input } });
      if (!res.data?.createAppointment) {
        setError(res.errors?.[0]?.message || 'Failed to create appointment');
        return;
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="New Appointment" size="l">
      <form onSubmit={handleSubmit} className="space-y-4">
        <ErrorBanner message={error} />

        <FieldSet legend="Vehicle">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Make">
              <Field.Input value={vehicle.make} disabled className="bg-gray-50" />
            </Field>
            <Field label="Model">
              <Field.Input value={vehicle.model} disabled className="bg-gray-50" />
            </Field>
            <Field label="Year">
              <Field.Input value={vehicle.year ?? ''} disabled className="bg-gray-50" />
            </Field>
            <Field label="Plate">
              <Field.Input value={vehicle.licensePlate || ''} disabled className="bg-gray-50" />
            </Field>
          </div>
        </FieldSet>

        <FieldSet legend="Customer">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Field label="Name" required>
                <Field.Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} required placeholder="Customer name" />
              </Field>
            </div>
            <Field label="Phone">
              <Field.Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="(555) 123-4567" />
            </Field>
            <Field label="Email">
              <Field.Input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="customer@example.com" />
            </Field>
          </div>
        </FieldSet>

        <FieldSet legend="Service">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Service Type" required>
              <Field.Input value={serviceType} onChange={(e) => setServiceType(e.target.value)} required placeholder="Oil Change" />
            </Field>
            <div className="col-span-2">
              <Field label="Description">
                <Field.Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} placeholder="Brief description of the issue" />
              </Field>
            </div>
          </div>
        </FieldSet>

        <FieldSet legend="Schedule">
          <div className="grid grid-cols-3 gap-4">
            <Field label="Date" required>
              <Field.Input type="date" value={scheduledDate} onChange={(e) => setScheduledDate(e.target.value)} required />
            </Field>
            <Field label="Start" required>
              <Field.Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            </Field>
            <Field label="End">
              <Field.Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </Field>
          </div>
        </FieldSet>

        <FieldSet legend="Notes">
          <Field.Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} placeholder="Internal notes" />
        </FieldSet>

        <FormActions onCancel={onClose} submitting={submitting} submitLabel="Save Appointment" />
      </form>
    </Modal>
  );
}
