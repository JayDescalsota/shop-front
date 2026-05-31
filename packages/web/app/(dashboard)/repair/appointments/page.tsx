'use client';

import { useState } from 'react';
import { Card, DataTable, StatusBadge, PageHeader, Button, Modal, Field, FieldSet, FormActions, ErrorBanner } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useAppointmentsQuery, useCreateAppointmentMutation } from '@/graphql/generated/hooks';
import type { CreateAppointmentInput } from '@/graphql/generated/index';

interface AppointmentForm {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehiclePlate: string;
  serviceType: string;
  description: string;
  scheduledDate: string;
  startTime: string;
  endTime: string;
  assignedMechanic: string;
  notes: string;
}

const emptyForm: AppointmentForm = {
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  vehiclePlate: '',
  serviceType: '',
  description: '',
  scheduledDate: '',
  startTime: '',
  endTime: '',
  assignedMechanic: '',
  notes: '',
};

function parseTenantId(): string {
  if (typeof window === 'undefined') return '';
  try {
    const token = localStorage.getItem('token');
    if (!token) return '';
    const payload = JSON.parse(atob(token.split('.')[1]));
    const tenants = payload.tenants || [];
    const selectedId = localStorage.getItem('selectedTenantId');
    if (selectedId && tenants.some((t: any) => t.id === selectedId)) return selectedId;
    return tenants[0]?.id || '';
  } catch {
    return '';
  }
}

export default function Appointments() {
  const tenantId = parseTenantId();
  const { data, refetch } = useAppointmentsQuery({ variables: { tenantId }, skip: !tenantId });
  const [createAppointment] = useCreateAppointmentMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<AppointmentForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const appointments = data?.appointments?.items ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const tid = parseTenantId();
    if (!tid) {
      setError('No tenant selected.');
      setSubmitting(false);
      return;
    }

    const input: CreateAppointmentInput = {
      tenantId: tid as any,
      customerName: form.customerName,
      customerPhone: form.customerPhone || null,
      customerEmail: form.customerEmail || null,
      vehicleMake: form.vehicleMake,
      vehicleModel: form.vehicleModel,
      vehicleYear: form.vehicleYear ? parseInt(form.vehicleYear) : null,
      vehiclePlate: form.vehiclePlate || null,
      serviceType: form.serviceType,
      description: form.description || null,
      scheduledDate: form.scheduledDate,
      startTime: form.startTime,
      endTime: form.endTime,
      assignedMechanic: form.assignedMechanic || null,
      notes: form.notes || null,
    };

    try {
      const res = await createAppointment({ variables: { input } });
      if (!res.data?.createAppointment) {
        setError(res.errors?.[0]?.message || 'Failed to create appointment');
        return;
      }
      setModalOpen(false);
      setForm(emptyForm);
      refetch();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const columns: Column<(typeof appointments)[0]>[] = [
    { key: 'customerName', header: 'Customer' },
    { key: 'vehicleMake', header: 'Vehicle', render: (a) => `${a.vehicleMake} ${a.vehicleModel}` },
    { key: 'serviceType', header: 'Service' },
    { key: 'scheduledDate', header: 'Date' },
    { key: 'startTime', header: 'Time' },
    { key: 'assignedMechanic', header: 'Mechanic' },
    { key: 'status', header: 'Status', render: (a) => <StatusBadge status={a.status} /> },
  ];

  return (
    <>
      <PageHeader title="Appointments" description="Schedule and manage service appointments" />
      <Card title="Upcoming Appointments" action={<Button onClick={() => setModalOpen(true)}>+ New Appointment</Button>}>
        <DataTable columns={columns} data={appointments} keyExtractor={(a) => a.id} />
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="New Appointment" size="l">
        <form onSubmit={handleSubmit} className="space-y-4">
          <ErrorBanner message={error} />

          <FieldSet legend="Customer">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Field label="Name" required>
                  <Field.Input name="customerName" value={form.customerName} onChange={handleChange} required placeholder="Customer name" />
                </Field>
              </div>
              <Field label="Phone">
                <Field.Input name="customerPhone" value={form.customerPhone} onChange={handleChange} placeholder="(555) 123-4567" />
              </Field>
              <Field label="Email">
                <Field.Input name="customerEmail" type="email" value={form.customerEmail} onChange={handleChange} placeholder="customer@example.com" />
              </Field>
            </div>
          </FieldSet>

          <FieldSet legend="Vehicle">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Make" required>
                <Field.Input name="vehicleMake" value={form.vehicleMake} onChange={handleChange} required placeholder="Toyota" />
              </Field>
              <Field label="Model" required>
                <Field.Input name="vehicleModel" value={form.vehicleModel} onChange={handleChange} required placeholder="Camry" />
              </Field>
              <Field label="Year">
                <Field.Input name="vehicleYear" value={form.vehicleYear} onChange={handleChange} placeholder="2020" />
              </Field>
              <Field label="Plate">
                <Field.Input name="vehiclePlate" value={form.vehiclePlate} onChange={handleChange} placeholder="ABC-1234" />
              </Field>
            </div>
          </FieldSet>

          <FieldSet legend="Service">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Service Type" required>
                <Field.Input name="serviceType" value={form.serviceType} onChange={handleChange} required placeholder="Oil Change" />
              </Field>
              <Field label="Mechanic">
                <Field.Input name="assignedMechanic" value={form.assignedMechanic} onChange={handleChange} placeholder="John" />
              </Field>
              <div className="col-span-2">
                <Field label="Description">
                  <Field.Textarea name="description" value={form.description} onChange={handleChange} rows={2} placeholder="Brief description of the issue" />
                </Field>
              </div>
            </div>
          </FieldSet>

          <FieldSet legend="Schedule">
            <div className="grid grid-cols-3 gap-4">
              <Field label="Date" required>
                <Field.Input name="scheduledDate" type="date" value={form.scheduledDate} onChange={handleChange} required />
              </Field>
              <Field label="Start" required>
                <Field.Input name="startTime" type="time" value={form.startTime} onChange={handleChange} required />
              </Field>
              <Field label="End" required>
                <Field.Input name="endTime" type="time" value={form.endTime} onChange={handleChange} required />
              </Field>
            </div>
          </FieldSet>

          <FieldSet legend="Notes">
            <Field.Textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Internal notes" />
          </FieldSet>

          <FormActions onCancel={() => setModalOpen(false)} submitting={submitting} submitLabel="Save Appointment" />
        </form>
      </Modal>
    </>
  );
}
