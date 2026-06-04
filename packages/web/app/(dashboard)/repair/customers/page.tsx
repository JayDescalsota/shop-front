'use client';

import { useState, useMemo } from 'react';
import { Card, DataTable, StatusBadge, PageHeader, Button, Field } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useCustomersQuery, useCreateCustomerMutation, useUpdateCustomerMutation } from '@/graphql/generated/hooks';
import type { CreateCustomerInput, UpdateCustomerInput } from '@/graphql/generated/index';
import CustomerModal from '@/components/CustomerModal';
import type { CustomerForm } from '@/components/CustomerModal';

export default function Customers() {
  const { data, refetch } = useCustomersQuery();
  const [createCustomer] = useCreateCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();

  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const allRows = useMemo(() =>
    (data?.customers?.items ?? []).map((c) => ({
      id: c.id, name: c.name, email: c.email ?? '', phone: c.phone ?? '',
      address: c.address ?? '', city: c.city ?? '', state: c.state ?? '',
      zip: c.zip ?? '', notes: c.notes ?? '',
      vehicles: c.totalVehicles, lastVisit: c.lastVisit ?? '-',
      totalSpent: `$${c.totalSpent.toFixed(2)}`, status: c.status,
    })),
    [data],
  );

  const rows = useMemo(() => {
    if (!search) return allRows;
    const q = search.toLowerCase();
    return allRows.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q) ||
      r.phone.toLowerCase().includes(q),
    );
  }, [allRows, search]);

  const handleAddSubmit = async (form: CustomerForm) => {
    setError('');
    setSubmitting(true);

    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) {
      setError('No tenant selected.');
      setSubmitting(false);
      return;
    }

    const input: CreateCustomerInput = {
      tenantId: tid as any,
      name: form.name,
      email: form.email || null,
      phone: form.phone || null,
      address: form.address || null,
      city: form.city || null,
      state: form.state || null,
      zip: form.zip || null,
      notes: form.notes || null,
    } as CreateCustomerInput;

    try {
      const res = await createCustomer({ variables: { input } });
      if (!res.data?.createCustomer) {
        setError(res.errors?.[0]?.message || 'Failed to create customer');
        return;
      }
      setAddOpen(false);
      refetch();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditSubmit = async (form: CustomerForm) => {
    if (!editingId) return;
    setError('');
    setSubmitting(true);

    const input: UpdateCustomerInput = {
      name: form.name || null,
      email: form.email || null,
      phone: form.phone || null,
      address: form.address || null,
      city: form.city || null,
      state: form.state || null,
      zip: form.zip || null,
      notes: form.notes || null,
    } as UpdateCustomerInput;

    try {
      const res = await updateCustomer({ variables: { id: editingId, input } });
      if (!res.data?.updateCustomer) {
        setError(res.errors?.[0]?.message || 'Failed to update customer');
        return;
      }
      setEditOpen(false);
      setEditingId(null);
      refetch();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const columns: Column<(typeof allRows)[0]>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    { key: 'vehicles', header: 'Vehicles' },
    { key: 'lastVisit', header: 'Last Visit' },
    { key: 'totalSpent', header: 'Total Spent' },
    { key: 'status', header: 'Status', render: (c) => <StatusBadge status={c.status} /> },
    {
      key: 'actions', header: 'Actions',
      render: (c) => (
        <button onClick={() => { setEditingId(c.id); setError(''); setEditOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Details</button>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Customers" description="Manage your customer base" />
      <Card title="All Customers" action={<Button onClick={() => { setError(''); setAddOpen(true); }}>+ Add Customer</Button>}>
        <div className="mb-4">
          <Field.Input
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DataTable columns={columns} data={rows} keyExtractor={(c) => c.id} />
      </Card>

      <CustomerModal
        size="l"
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add Customer"
        submitLabel="Save Customer"
        onSubmit={handleAddSubmit}
        submitting={submitting}
        error={error}
      />

      <CustomerModal
        open={editOpen}
        onClose={() => { setEditOpen(false); setEditingId(null); }}
        title="Edit Customer"
        submitLabel="Update Customer"
        onSubmit={handleEditSubmit}
        initialData={allRows.find((r) => r.id === editingId)}
        submitting={submitting}
        error={error}
      />
    </>
  );
}
