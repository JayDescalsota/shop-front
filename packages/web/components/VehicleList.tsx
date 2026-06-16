'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, DataTable, PageHeader, Button, Field } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import { useVehiclesQuery, useCustomersQuery, useCreateVehicleMutation, useUpdateVehicleMutation } from '@/graphql/generated/hooks';
import type { CreateVehicleInput, UpdateVehicleInput } from '@/graphql/generated/index';
import VehicleModal from './VehicleModal';
import type { VehicleForm } from './VehicleModal';
import SendToShopModal from './SendToShopModal';
import AppointmentModal from './AppointmentModal';

interface VehicleListProps {
  title: string;
  description: string;
  showOwner?: boolean;
  hideOwnerModal?: boolean;
  showSendToShop?: boolean;
  showAddAppointment?: boolean;
  linkToDetail?: boolean;
  detailPrefix?: string;
  defaultCustomerId?: string;
}

export default function VehicleList({
  title,
  description,
  showOwner = true,
  hideOwnerModal = false,
  showSendToShop = false,
  showAddAppointment = false,
  linkToDetail = false,
  detailPrefix = '',
  defaultCustomerId = '',
}: VehicleListProps) {
  const { data, refetch } = useVehiclesQuery();
  const { data: custData } = useCustomersQuery();
  const [createVehicle] = useCreateVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();

  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [sendOpen, setSendOpen] = useState(false);
  const [sendingVehicleId, setSendingVehicleId] = useState<string | null>(null);
  const [apptOpen, setApptOpen] = useState(false);
  const [apptVehicleId, setApptVehicleId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const customerMap = useMemo(() => {
    const names = new Map<string, string>();
    const infos = new Map<string, { name: string; email: string; phone: string }>();
    for (const c of custData?.customers?.items ?? []) {
      names.set(c.id, c.name);
      infos.set(c.id, { name: c.name, email: c.email ?? '', phone: c.phone ?? '' });
    }
    return { names, infos };
  }, [custData]);

  const allVehicles = useMemo(() =>
    (data?.vehicles?.items ?? []).map((v) => {
      const cust = v.customerId ? customerMap.infos.get(v.customerId) : undefined;
      return {
        id: v.id, make: v.make, model: v.model, year: v.year,
        vin: v.vin ?? '', licensePlate: v.licensePlate ?? '',
        color: v.color ?? '', notes: v.notes ?? '',
        customerId: v.customerId ?? '',
        customerName: cust?.name ?? '',
        customerEmail: cust?.email ?? '',
        customerPhone: cust?.phone ?? '',
        status: v.status ?? 'running',
        repairStatus: v.repairStatus ?? 'none',
      };
    }),
    [data, customerMap],
  );

  const sendingVehicle = useMemo(() => {
    if (!sendingVehicleId) return null;
    return allVehicles.find((v) => v.id === sendingVehicleId) ?? null;
  }, [sendingVehicleId, allVehicles]);

  const apptVehicle = useMemo(() => {
    if (!apptVehicleId) return null;
    return allVehicles.find((v) => v.id === apptVehicleId) ?? null;
  }, [apptVehicleId, allVehicles]);

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
    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) { setError('No tenant selected.'); setSubmitting(false); return; }
    const input: CreateVehicleInput = {
      tenantId: tid as any, make: form.make, model: form.model,
      year: form.year ? parseInt(form.year) : null,
      vin: form.vin || null, licensePlate: form.licensePlate || null,
      color: form.color || null, notes: form.notes || null,
      customerId: form.customerId || null,
      status: form.status || null,
      repairStatus: form.repairStatus || null,
    } as CreateVehicleInput;
    try {
      const res = await createVehicle({ variables: { input } });
      if (!res.data?.createVehicle) { setError(res.errors?.[0]?.message || 'Failed to create vehicle'); return; }
      setAddOpen(false); refetch();
    } catch (err: any) { setError(err.message || 'An error occurred'); }
    finally { setSubmitting(false); }
  };

  const handleEditSubmit = async (form: VehicleForm) => {
    if (!editingId) return;
    setError(''); setSubmitting(true);
    const input: UpdateVehicleInput = {
      make: form.make || null, model: form.model || null,
      year: form.year ? parseInt(form.year) : null,
      vin: form.vin || null, licensePlate: form.licensePlate || null,
      color: form.color || null, notes: form.notes || null,
      customerId: form.customerId || null,
      status: form.status || null,
      repairStatus: form.repairStatus || null,
    } as UpdateVehicleInput;
    try {
      const res = await updateVehicle({ variables: { id: editingId, input } });
      if (!res.data?.updateVehicle) { setError(res.errors?.[0]?.message || 'Failed to update vehicle'); return; }
      setEditOpen(false); setEditingId(null); refetch();
    } catch (err: any) { setError(err.message || 'An error occurred'); }
    finally { setSubmitting(false); }
  };

  const columns: Column<(typeof allVehicles)[0]>[] = [
    {
      key: 'licensePlate', header: 'License Plate',
      render: (v) =>
        linkToDetail ? (
          <Link href={`${detailPrefix}${v.id}`} className="text-accent hover:underline text-xs font-semibold">{v.licensePlate || 'N/A'}</Link>
        ) : (
          <span>{v.licensePlate || 'N/A'}</span>
        ),
    },
    { key: 'make', header: 'Make' },
    { key: 'model', header: 'Model' },
    { key: 'year', header: 'Year' },
    { key: 'vin', header: 'VIN' },
    { key: 'color', header: 'Color' },
    ...(showOwner ? [{ key: 'customerName' as const, header: 'Owner' }] : []),
    {
      key: 'status', header: 'Status',
      render: (v) => {
        const labels: Record<string, string> = { running: 'Running', broken: 'Broken', under_maintenance: 'In Shop', out_of_service: 'Out of Service' };
        const colors: Record<string, string> = { running: 'text-green-600', broken: 'text-red-600', under_maintenance: 'text-yellow-600', out_of_service: 'text-gray-400' };
        return <span className={colors[v.status] ?? ''}>{labels[v.status] ?? v.status}</span>;
      },
    },
    {
      key: 'actions', header: 'Actions',
      render: (v) => (
        <div className="flex flex-col gap-1 items-start">
          <button onClick={() => { setEditingId(v.id); setError(''); setEditOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Details</button>
          {showSendToShop && (
            <button onClick={() => { setSendingVehicleId(v.id); setSendOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Send to Shop</button>
          )}
          {showAddAppointment && (
            <button onClick={() => { setApptVehicleId(v.id); setApptOpen(true); }} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Add Appointment</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader title={title} description={description} />
      <Card title="All Vehicles" action={<Button onClick={() => { setError(''); setAddOpen(true); }}>+ Add Vehicle</Button>}>
        <div className="mb-4">
          <Field.Input placeholder="Search vehicles..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <DataTable columns={columns} data={vehicles} keyExtractor={(v) => v.id} />
      </Card>

      <VehicleModal open={addOpen} onClose={() => setAddOpen(false)} title="Add Vehicle" submitLabel="Save Vehicle" onSubmit={handleAddSubmit} submitting={submitting} error={error} hideOwner={hideOwnerModal} initialData={defaultCustomerId ? { customerId: defaultCustomerId } : undefined} />
      <VehicleModal open={editOpen} onClose={() => { setEditOpen(false); setEditingId(null); }} title="Edit Vehicle" submitLabel="Update Vehicle" onSubmit={handleEditSubmit} initialData={(() => { const v = allVehicles.find((v) => v.id === editingId); return v ? { ...v, year: v.year?.toString() ?? '' } : undefined; })()} submitting={submitting} error={error} hideOwner={hideOwnerModal} />
      {showSendToShop && (
        <SendToShopModal open={sendOpen} onClose={() => { setSendOpen(false); setSendingVehicleId(null); }} vehicle={sendingVehicle} />
      )}
      <AppointmentModal open={apptOpen} onClose={() => { setApptOpen(false); setApptVehicleId(null); }} vehicle={apptVehicle} />
    </>
  );
}
