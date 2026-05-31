'use client';

import { useState, useMemo } from 'react';
import { Card, DataTable, PageHeader, Button, Field } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useVehiclesQuery, useCreateVehicleMutation, useUpdateVehicleMutation } from '@/graphql/generated/hooks';
import type { CreateVehicleInput, UpdateVehicleInput } from '@/graphql/generated/index';
import VehicleModal from '@/components/VehicleModal';
import type { VehicleForm } from '@/components/VehicleModal';

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

export default function Vehicles() {
  const tenantId = parseTenantId();
  const { data, refetch } = useVehiclesQuery({ variables: { tenantId }, skip: !tenantId });
  const [createVehicle] = useCreateVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();

  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const allVehicles = useMemo(() =>
    (data?.vehicles?.items ?? []).map((v) => ({
      id: v.id, make: v.make, model: v.model, year: v.year,
      vin: v.vin ?? '', licensePlate: v.licensePlate ?? '',
      color: v.color ?? '', notes: v.notes ?? '',
    })),
    [data],
  );

  const vehicles = useMemo(() => {
    if (!search) return allVehicles;
    const q = search.toLowerCase();
    return allVehicles.filter((v) =>
      v.make.toLowerCase().includes(q) ||
      v.model.toLowerCase().includes(q) ||
      v.vin.toLowerCase().includes(q) ||
      v.licensePlate.toLowerCase().includes(q),
    );
  }, [allVehicles, search]);

  const handleAddSubmit = async (form: VehicleForm) => {
    setError('');
    setSubmitting(true);

    const tid = parseTenantId();
    if (!tid) {
      setError('No tenant selected.');
      setSubmitting(false);
      return;
    }

    const input: CreateVehicleInput = {
      tenantId: tid as any,
      make: form.make,
      model: form.model,
      year: form.year ? parseInt(form.year) : null,
      vin: form.vin || null,
      licensePlate: form.licensePlate || null,
      color: form.color || null,
      notes: form.notes || null,
    } as CreateVehicleInput;

    try {
      const res = await createVehicle({ variables: { input } });
      if (!res.data?.createVehicle) {
        setError(res.errors?.[0]?.message || 'Failed to create vehicle');
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

  const handleEditSubmit = async (form: VehicleForm) => {
    if (!editingId) return;
    setError('');
    setSubmitting(true);

    const input: UpdateVehicleInput = {
      make: form.make || null,
      model: form.model || null,
      year: form.year ? parseInt(form.year) : null,
      vin: form.vin || null,
      licensePlate: form.licensePlate || null,
      color: form.color || null,
      notes: form.notes || null,
    } as UpdateVehicleInput;

    try {
      const res = await updateVehicle({ variables: { id: editingId, input } });
      if (!res.data?.updateVehicle) {
        setError(res.errors?.[0]?.message || 'Failed to update vehicle');
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

  const columns: Column<(typeof allVehicles)[0]>[] = [
    { key: 'make', header: 'Make' },
    { key: 'model', header: 'Model' },
    { key: 'year', header: 'Year' },
    { key: 'vin', header: 'VIN' },
    { key: 'licensePlate', header: 'License' },
    { key: 'color', header: 'Color' },
    {
      key: 'actions', header: 'Actions',
      render: (v) => (
        <button onClick={() => { setEditingId(v.id); setError(''); setEditOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Details</button>
      ),
    },
  ];

  return (
    <>
      <PageHeader title="Vehicles" description="Track customer vehicles and service history" />
      <Card title="All Vehicles" action={<Button onClick={() => { setError(''); setAddOpen(true); }}>+ Add Vehicle</Button>}>
        <div className="mb-4">
          <Field.Input
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DataTable columns={columns} data={vehicles} keyExtractor={(v) => v.id} />
      </Card>

      <VehicleModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add Vehicle"
        submitLabel="Save Vehicle"
        onSubmit={handleAddSubmit}
        submitting={submitting}
        error={error}
      />

      <VehicleModal
        open={editOpen}
        onClose={() => { setEditOpen(false); setEditingId(null); }}
        title="Edit Vehicle"
        submitLabel="Update Vehicle"
        onSubmit={handleEditSubmit}
        initialData={(() => { const v = allVehicles.find((v) => v.id === editingId); return v ? { ...v, year: v.year?.toString() ?? '' } : undefined; })()}
        submitting={submitting}
        error={error}
      />
    </>
  );
}
