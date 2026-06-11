'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, DataTable, StatusBadge, PageHeader, Button, Modal, Field, FieldSet, FormActions, ErrorBanner } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useAppointmentsQuery, useCreateAppointmentMutation, useUpdateAppointmentMutation, useStaffListQuery, useStaffAssignmentsQuery, useCreateStaffAssignmentMutation, useStartStaffAssignmentMutation, useCompleteStaffAssignmentMutation, useDeleteStaffAssignmentMutation, useReassignStaffAssignmentMutation } from '@/graphql/generated/hooks';
import type { CreateAppointmentInput, UpdateAppointmentInput } from '@/graphql/generated/index';

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
  bay: string;
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
  bay: '',
  notes: '',
};

const STATUS_LABELS: Record<string, string> = {
  queued: 'Queued',
  on_going: 'On-Going',
  road_test: 'Road Test',
  repaired: 'Repaired',
  waiting_parts: 'Waiting Parts',
  waiting_pickup: 'Waiting Pickup',
  completed: 'Completed',
  cancelled: 'Cancelled',
  no_show: 'No Show',
};

const ALL_STATUS = '__all__';

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none';

function ElapsedTime({ since }: { since: string }) {
  const getElapsed = () => {
    const diff = Date.now() - new Date(since).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return '< 1 min';
    const hrs = Math.floor(mins / 60);
    return hrs > 0 ? `${hrs}h ${mins % 60}m` : `${mins} min`;
  };
  const [label, setLabel] = useState(getElapsed);
  useEffect(() => {
    const id = setInterval(() => setLabel(getElapsed()), 30000);
    return () => clearInterval(id);
  }, [since]);
  return <span className="ml-2 text-xs text-blue-500">{label}</span>;
}

export default function Appointments() {
  const { data, refetch } = useAppointmentsQuery();
  const [createAppointment] = useCreateAppointmentMutation();
  const [updateAppointment] = useUpdateAppointmentMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<AppointmentForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(ALL_STATUS);
  const [selectedAppt, setSelectedAppt] = useState<typeof allAppointments[0] | null>(null);
  const [editBay, setEditBay] = useState('');
  const [newAssignmentStaffId, setNewAssignmentStaffId] = useState('');
  const [completingId, setCompletingId] = useState<string | null>(null);
  const [reassigningId, setReassigningId] = useState<string | null>(null);
  const [reassignTargetId, setReassignTargetId] = useState('');

  const { data: staffData } = useStaffListQuery();
  const { data: assignData, refetch: refetchAssign } = useStaffAssignmentsQuery({
    variables: { appointmentId: selectedAppt?.id ?? '' },
    skip: !selectedAppt,
  });
  const [createAssignment] = useCreateStaffAssignmentMutation();
  const [startAssignment] = useStartStaffAssignmentMutation();
  const [completeAssignment] = useCompleteStaffAssignmentMutation();
  const [deleteAssignment] = useDeleteStaffAssignmentMutation();
  const [reassignAssignment] = useReassignStaffAssignmentMutation();

  const mechanics = useMemo(() =>
    staffData?.staffList?.items?.filter((s) => s.role === 'mechanic' && s.status === 'active') ?? [],
    [staffData],
  );

  const assignments = assignData?.staffAssignments ?? [];

  const allAppointments = useMemo(() =>
    (data?.appointments?.items ?? []).map((a) => ({
      ...a,
      vehicleLabel: `${a.vehicleMake} ${a.vehicleModel}${a.vehicleYear ? ' ' + a.vehicleYear : ''}`,
      timeRange: a.endTime ? `${a.startTime} - ${a.endTime}` : a.startTime,
      contact: a.customerPhone || a.customerEmail || '-',
    })),
    [data],
  );

  const appointments = useMemo(() => {
    let filtered = allAppointments;
    if (statusFilter !== ALL_STATUS) {
      filtered = filtered.filter((a) => a.status === statusFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter((a) =>
        a.customerName.toLowerCase().includes(q) ||
        a.vehicleMake.toLowerCase().includes(q) ||
        a.vehicleModel.toLowerCase().includes(q) ||
        a.vehiclePlate?.toLowerCase().includes(q) ||
        a.serviceType.toLowerCase().includes(q),
      );
    }
    return filtered;
  }, [allAppointments, statusFilter, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      endTime: form.endTime || null,
      assignedMechanic: null,
      bay: form.bay || null,
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

  const openDetail = (a: typeof allAppointments[0]) => {
    setSelectedAppt(a);
    setEditBay(a.bay ?? '');
    setNewAssignmentStaffId('');
    setReassigningId(null);
    setReassignTargetId('');
    setError('');
  };

  const handleUpdateAppt = async (status?: string) => {
    if (!selectedAppt) return;
    setError('');
    setSubmitting(true);
    try {
      const input: UpdateAppointmentInput = {
        bay: editBay || null,
        assignedMechanic: null,
        status: status ?? null,
      };
      const res = await updateAppointment({ variables: { id: selectedAppt.id, input } });
      if (!res.data?.updateAppointment) {
        setError(res.errors?.[0]?.message || 'Failed to update appointment');
        return;
      }
      setSelectedAppt(null);
      refetch();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddAssignment = async () => {
    if (!selectedAppt || !newAssignmentStaffId) return;
    setError('');
    setSubmitting(true);
    const mechanic = mechanics.find((m) => m.id === newAssignmentStaffId);
    if (!mechanic) return;
    try {
      const tid = localStorage.getItem('selectedTenantId') || '';
      const res = await createAssignment({
        variables: {
          input: {
            tenantId: tid,
            appointmentId: selectedAppt.id,
            staffId: mechanic.id,
            staffName: mechanic.name,
            role: mechanic.role,
          },
        },
      });
      if (!res.data?.createStaffAssignment) {
        setError(res.errors?.[0]?.message || 'Failed to assign mechanic');
        return;
      }
      setNewAssignmentStaffId('');
      refetchAssign();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStartAssignment = async (id: string) => {
    try {
      const res = await startAssignment({ variables: { id } });
      if (res.data?.startStaffAssignment) refetchAssign();
    } catch (err: any) {
      setError(err.message || 'Failed to start assignment');
    }
  };

  const handleCompleteAssignment = async (id: string) => {
    setCompletingId(id);
    try {
      const res = await completeAssignment({ variables: { id, totalMinutes: 0 } });
      if (res.data?.completeStaffAssignment) refetchAssign();
    } catch (err: any) {
      setError(err.message || 'Failed to complete assignment');
    } finally {
      setCompletingId(null);
    }
  };

  const handleRemoveAssignment = async (id: string) => {
    try {
      const res = await deleteAssignment({ variables: { id } });
      if (res.data?.deleteStaffAssignment) refetchAssign();
    } catch (err: any) {
      setError(err.message || 'Failed to remove assignment');
    }
  };

  const handleReassign = async (assignmentId: string) => {
    if (!reassignTargetId) return;
    setError('');
    setSubmitting(true);
    try {
      const res = await reassignAssignment({
        variables: { id: assignmentId, targetAppointmentId: reassignTargetId },
      });
      if (!res.data?.reassignStaffAssignment) {
        setError(res.errors?.[0]?.message || 'Failed to reassign');
        return;
      }
      setReassigningId(null);
      setReassignTargetId('');
      refetchAssign();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const columns: Column<(typeof appointments)[0]>[] = [
    { key: 'customerName', header: 'Customer' },
    {
      key: 'vehicleLabel', header: 'Vehicle',
      render: (a) => (
        <div>
          <div className="font-medium">{a.vehicleMake} {a.vehicleModel}</div>
          {a.vehiclePlate && <div className="text-xs text-gray-400">{a.vehiclePlate}</div>}
        </div>
      ),
    },
    { key: 'serviceType', header: 'Service' },
    { key: 'scheduledDate', header: 'Date' },
    {
      key: 'timeRange', header: 'Time',
      render: (a) => <span className="text-sm">{a.timeRange}</span>,
    },
    { key: 'contact', header: 'Contact' },
    { key: 'shopId', header: 'Shop' },
    {
      key: 'status', header: 'Status',
      render: (a) => <StatusBadge status={a.status} />,
    },
    {
      key: 'actions', header: '',
      render: (a) => (
        <button onClick={() => openDetail(a)} className="text-accent hover:underline text-xs font-semibold cursor-pointer">View</button>
      ),
    },
  ];

  const statuses = useMemo(() => {
    const s = new Set(allAppointments.map((a) => a.status));
    return [...s].sort();
  }, [allAppointments]);

  return (
    <>
      <PageHeader title="Appointments" description="Schedule and manage service appointments" />
      <Card title="Scheduled Appointments" action={<Button onClick={() => setModalOpen(true)}>+ New Appointment</Button>}>
        <div className="mb-4 flex gap-3">
          <div className="flex-1">
            <Field.Input placeholder="Search appointments..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-44 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value={ALL_STATUS}>All statuses</option>
            {statuses.map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s] || s}</option>
            ))}
          </select>
        </div>
        <DataTable columns={columns} data={appointments} keyExtractor={(a) => a.id} />
      </Card>

      <Modal open={!!selectedAppt} onClose={() => setSelectedAppt(null)} title={`Appointment: ${selectedAppt?.customerName ?? ''}`} size="l">
        {selectedAppt && (
          <div className="space-y-4">
            <ErrorBanner message={error} />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-500">Customer:</span>
                <p>{selectedAppt.customerName}</p>
                {selectedAppt.customerPhone && <p className="text-gray-400">{selectedAppt.customerPhone}</p>}
                {selectedAppt.customerEmail && <p className="text-gray-400">{selectedAppt.customerEmail}</p>}
              </div>
              <div>
                <span className="font-semibold text-gray-500">Vehicle:</span>
                <p>{selectedAppt.vehicleMake} {selectedAppt.vehicleModel}</p>
                {selectedAppt.vehicleYear && <p className="text-gray-400">{selectedAppt.vehicleYear}</p>}
                {selectedAppt.vehiclePlate && <p className="text-gray-400">{selectedAppt.vehiclePlate}</p>}
              </div>
              <div>
                <span className="font-semibold text-gray-500">Service:</span>
                <p>{selectedAppt.serviceType}</p>
                {selectedAppt.description && <p className="text-gray-400">{selectedAppt.description}</p>}
              </div>
              <div>
                <span className="font-semibold text-gray-500">Schedule:</span>
                <p>{selectedAppt.scheduledDate}</p>
                <p className="text-gray-400">{selectedAppt.timeRange}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Status:</span>
                <StatusBadge status={selectedAppt.status} />
              </div>
              {selectedAppt.shopId && (
                <div>
                  <span className="font-semibold text-gray-500">Shop:</span>
                  <p>{selectedAppt.shopId}</p>
                </div>
              )}
              {selectedAppt.notes && (
                <div className="col-span-2">
                  <span className="font-semibold text-gray-500">Notes:</span>
                  <p className="text-gray-400">{selectedAppt.notes}</p>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold mb-3">Bay &amp; Assignment</h4>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Bay</label>
                  <input type="text" value={editBay} onChange={(e) => setEditBay(e.target.value)}
                    placeholder="e.g. Bay 3" className={inputClass} />
                </div>
              </div>
              <div className="flex justify-end mb-3">
                <Button onClick={() => handleUpdateAppt()} disabled={submitting}>Save Bay</Button>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <h5 className="text-xs font-semibold text-gray-500 mb-2">Assigned Mechanics/Technicians</h5>
                {assignments.length === 0 && <p className="text-xs text-gray-400">No mechanics assigned</p>}
                <div className="space-y-2">
                  {assignments.map((a) => (
                    <div key={a.id}>
                      <div className="flex items-center justify-between bg-gray-50 rounded px-3 py-2">
                        <div>
                          <span className="text-sm font-medium">{a.staffName}</span>
                          <span className="ml-2 text-xs text-gray-400">{a.role}</span>
                          <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
                            a.status === 'assigned' ? 'bg-yellow-100 text-yellow-700' :
                            a.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {a.status.replace('_', ' ')}
                          </span>
                          {a.totalMinutes != null && a.totalMinutes > 0 ? (
                            <span className="ml-2 text-xs text-gray-500">{a.totalMinutes} min</span>
                          ) : a.status === 'in_progress' && a.startedAt && (
                            <ElapsedTime since={a.startedAt} />
                          )}
                        </div>
                        <div className="flex gap-1">
                          {a.status === 'assigned' && (
                            <button onClick={() => handleStartAssignment(a.id)}
                              className="text-xs text-blue-600 hover:underline cursor-pointer">Start</button>
                          )}
                          {a.status === 'in_progress' && (
                            <button onClick={() => handleCompleteAssignment(a.id)}
                              className="text-xs text-green-600 hover:underline cursor-pointer"
                              disabled={completingId === a.id}>{completingId === a.id ? 'Completing...' : 'Complete'}</button>
                          )}
                          {(a.status === 'assigned' || a.status === 'completed') && (
                            <>
                              <button onClick={() => setReassigningId(reassigningId === a.id ? null : a.id)}
                                className="text-xs text-purple-600 hover:underline cursor-pointer">Reassign</button>
                              <button onClick={() => handleRemoveAssignment(a.id)}
                                className="text-xs text-red-600 hover:underline cursor-pointer">Remove</button>
                            </>
                          )}
                        </div>
                      </div>
                      {reassigningId === a.id && (
                        <div className="flex gap-2 mt-1 mb-1 px-3 py-2 bg-gray-100 rounded">
                          <select value={reassignTargetId} onChange={(e) => setReassignTargetId(e.target.value)}
                            className="flex-1 rounded border border-gray-300 px-3 py-1.5 text-xs focus:border-blue-500 focus:outline-none">
                            <option value="">Select target appointment...</option>
                            {allAppointments.filter((apt) => apt.id !== selectedAppt?.id).map((apt) => (
                              <option key={apt.id} value={apt.id}>{apt.customerName} - {apt.vehicleLabel}</option>
                            ))}
                          </select>
                          <button onClick={() => handleReassign(a.id)} disabled={submitting || !reassignTargetId}
                            className="text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 disabled:opacity-50 cursor-pointer">Confirm</button>
                          <button onClick={() => setReassigningId(null)}
                            className="text-xs text-gray-500 hover:underline cursor-pointer">Cancel</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <select value={newAssignmentStaffId} onChange={(e) => setNewAssignmentStaffId(e.target.value)}
                    className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                    <option value="">Select mechanic/technician...</option>
                    {mechanics.filter((m) => !assignments.some((a) => a.staffId === m.id)).map((m) => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                  <Button onClick={handleAddAssignment} disabled={submitting || !newAssignmentStaffId}>Assign</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold mb-3">Update Status</h4>
              <div className="flex flex-wrap gap-2">
                {selectedAppt.status !== 'queued' && (
                  <Button onClick={() => handleUpdateAppt('queued')} disabled={submitting}>{STATUS_LABELS.queued}</Button>
                )}
                {selectedAppt.status !== 'on_going' && (
                  <Button onClick={() => handleUpdateAppt('on_going')} disabled={submitting}>{STATUS_LABELS.on_going}</Button>
                )}
                {selectedAppt.status !== 'road_test' && (
                  <Button onClick={() => handleUpdateAppt('road_test')} disabled={submitting}>{STATUS_LABELS.road_test}</Button>
                )}
                {selectedAppt.status !== 'repaired' && (
                  <Button onClick={() => handleUpdateAppt('repaired')} disabled={submitting}>{STATUS_LABELS.repaired}</Button>
                )}
                {selectedAppt.status !== 'waiting_parts' && (
                  <Button onClick={() => handleUpdateAppt('waiting_parts')} disabled={submitting}>{STATUS_LABELS.waiting_parts}</Button>
                )}
                {selectedAppt.status !== 'waiting_pickup' && (
                  <Button onClick={() => handleUpdateAppt('waiting_pickup')} disabled={submitting}>{STATUS_LABELS.waiting_pickup}</Button>
                )}
                {selectedAppt.status !== 'completed' && (
                  <Button onClick={() => handleUpdateAppt('completed')} disabled={submitting}>{STATUS_LABELS.completed}</Button>
                )}
                {selectedAppt.status !== 'cancelled' && (
                  <Button onClick={() => handleUpdateAppt('cancelled')} disabled={submitting}>{STATUS_LABELS.cancelled}</Button>
                )}
                {selectedAppt.status !== 'no_show' && (
                  <Button onClick={() => handleUpdateAppt('no_show')} disabled={submitting}>{STATUS_LABELS.no_show}</Button>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <Button onClick={() => setSelectedAppt(null)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>

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
              <Field label="End">
                <Field.Input name="endTime" type="time" value={form.endTime} onChange={handleChange} />
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
