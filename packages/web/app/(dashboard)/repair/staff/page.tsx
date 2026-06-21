'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, DataTable, PageHeader, Button, Field } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useStaffListQuery, useCreateStaffMutation, useUpdateStaffMutation, useDeleteStaffMutation } from '@/graphql/generated/hooks';
import DriverModal from '@/components/DriverModal';
import type { DriverForm } from '@/components/DriverModal';

const statusLabels: Record<string, string> = {
  active: 'Active', inactive: 'Inactive', suspended: 'Suspended',
};

const statusColors: Record<string, string> = {
  active: 'text-emerald-600', inactive: 'text-gray-400', suspended: 'text-red-600',
};

const roleLabels: Record<string, string> = {
  driver: 'Driver', mechanic: 'Mechanic', admin_staff: 'Admin Staff', office: 'Office', other: 'Other',
};

export default function StaffPage() {
  const tenantId = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { data, isLoading, refetch } = useStaffListQuery();
  const { mutateAsync: createStaff } = useCreateStaffMutation();
  const { mutateAsync: updateStaff } = useUpdateStaffMutation();
  const { mutateAsync: deleteStaff } = useDeleteStaffMutation();

  const staff = (data?.staffList?.items ?? []).filter((d) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return d.name.toLowerCase().includes(q) ||
      (d.email && d.email.toLowerCase().includes(q)) ||
      (d.phone && d.phone.includes(q)) ||
      (d.role && d.role.toLowerCase().includes(q));
  });

  const handleAddSubmit = async (form: DriverForm) => {
    setError(''); setSubmitting(true);
    try {
      const res = await createStaff({ input: { tenantId, name: form.name, role: form.role || null, email: form.email || null, phone: form.phone || null, licenseNumber: form.licenseNumber || null, licenseClass: form.licenseClass || null, licenseExpiry: form.licenseExpiry || null, dateOfBirth: form.dateOfBirth || null, address: form.address || null, emergencyContact: form.emergencyContact || null, emergencyPhone: form.emergencyPhone || null, status: form.status || null, notes: form.notes || null, hireDate: form.hireDate || null } });
      if (!res?.createStaff) { setError('Failed to create staff'); return; }
      setAddOpen(false); refetch();
    } catch (err: any) { setError(err.message); }
    finally { setSubmitting(false); }
  };

  const handleEditSubmit = async (form: DriverForm) => {
    if (!editingStaff) return;
    setError(''); setSubmitting(true);
    try {
      const res = await updateStaff({ id: editingStaff.id, input: { name: form.name || null, role: form.role || null, email: form.email || null, phone: form.phone || null, licenseNumber: form.licenseNumber || null, licenseClass: form.licenseClass || null, licenseExpiry: form.licenseExpiry || null, dateOfBirth: form.dateOfBirth || null, address: form.address || null, emergencyContact: form.emergencyContact || null, emergencyPhone: form.emergencyPhone || null, status: form.status || null, notes: form.notes || null, hireDate: form.hireDate || null } });
      if (!res?.updateStaff) { setError('Failed to update staff'); return; }
      setEditOpen(false); setEditingStaff(null); refetch();
    } catch (err: any) { setError(err.message); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    await deleteStaff({ id });
    refetch();
  };

  const columns: Column<(typeof staff)[0]>[] = [
    { key: 'name', header: 'Name', render: (d) => <Link href={`/repair/staff/${d.id}`} className="text-accent hover:underline text-xs font-semibold">{d.name}</Link> },
    { key: 'role', header: 'Role', render: (d) => <span className="text-muted">{roleLabels[d.role] || d.role}</span> },
    { key: 'email', header: 'Email', render: (d) => <span className="text-muted">{d.email || 'N/A'}</span> },
    { key: 'phone', header: 'Phone', render: (d) => <span className="text-muted">{d.phone || 'N/A'}</span> },
    { key: 'status', header: 'Status', render: (d) => <span className={statusColors[d.status] ?? ''}>{statusLabels[d.status] ?? d.status}</span> },
    {
      key: 'actions', header: 'Actions',
      render: (d) => (
        <div className="flex gap-3">
          <button onClick={() => { setEditingStaff(d); setError(''); setEditOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Edit</button>
          <button onClick={() => handleDelete(d.id)} className="text-red-600 hover:underline text-xs font-semibold cursor-pointer">Delete</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Staff" description="Manage your service team" />
      <Card title="All Staff" action={<Button onClick={() => { setError(''); setAddOpen(true); }}>+ Add Staff</Button>}>
        <div className="mb-4">
          <Field.Input placeholder="Search staff..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {isLoading ? (
          <p className="text-sm text-muted">Loading staff...</p>
        ) : (
          <DataTable columns={columns} data={staff} keyExtractor={(d) => d.id} />
        )}
      </Card>

      <DriverModal open={addOpen} onClose={() => setAddOpen(false)} title="Add Staff" submitLabel="Save Staff" onSubmit={handleAddSubmit} submitting={submitting} error={error} />
      <DriverModal open={editOpen} onClose={() => { setEditOpen(false); setEditingStaff(null); }} title="Edit Staff" submitLabel="Update Staff" onSubmit={handleEditSubmit} initialData={editingStaff ? { ...editingStaff } : undefined} submitting={submitting} error={error} />
    </>
  );
}
