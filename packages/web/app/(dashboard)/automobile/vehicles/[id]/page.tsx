'use client';

import { useState, useMemo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, PageHeader, Button } from '@autocare/ui';
import { useVehicleQuery, useCustomersQuery, useAppointmentsQuery, useUpdateVehicleMutation } from '@/graphql/generated/hooks';
import type { UpdateVehicleInput } from '@/graphql/generated/index';

const tabs = [
  { id: 'details', label: 'Details', icon: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75' },
  { id: 'repairs', label: 'Repairs', icon: 'M11.42 15.17l-5.1-5.1m5.1 5.1L17 21M11.42 15.17l1.59-1.59a3.12 3.12 0 014.41 0l.59.59a3.12 3.12 0 010 4.41l-1.59 1.59m-5.1-5.1l-1.59 1.59a3.12 3.12 0 000 4.41l.59.59a3.12 3.12 0 004.41 0l1.59-1.59m-5.1-5.1l5.1-5.1' },
  { id: 'services', label: 'Services', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { id: 'staff', label: 'Staff', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { id: 'routes', label: 'Routes', icon: 'M9 6.75V15m6-6v8.25m.503 3.198l2.616-2.616a1.5 1.5 0 012.122 0l2.616 2.616a1.5 1.5 0 010 2.122l-2.616 2.616a1.5 1.5 0 01-2.122 0l-2.616-2.616a1.5 1.5 0 010-2.122z' },
  { id: 'fuel', label: 'Fuel', icon: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z' },
  { id: 'income', label: 'Income', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'expenses', label: 'Expenses', icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' },
];

const statusLabels: Record<string, string> = {
  running: 'Running',
  broken: 'Broken',
  under_maintenance: 'In Shop',
  out_of_service: 'Out of Service',
};

const statusColors: Record<string, string> = {
  running: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  broken: 'bg-red-50 text-red-700 border border-red-200',
  under_maintenance: 'bg-amber-50 text-amber-700 border border-amber-200',
  out_of_service: 'bg-gray-50 text-gray-500 border border-gray-200',
};

const repairStatusLabels: Record<string, string> = {
  none: 'None',
  in_progress: 'In Progress',
  completed: 'Completed',
  awaiting_parts: 'Awaiting Parts',
  waiting_pickup: 'Waiting Pickup',
};

const inputClass = 'w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all';
const readonlyClass = 'w-full rounded-lg border border-transparent px-3 py-2 text-sm bg-gray-50 text-gray-700';

interface VehicleForm {
  make: string;
  model: string;
  year: string;
  vin: string;
  licensePlate: string;
  color: string;
  notes: string;
  status: string;
  repairStatus: string;
}

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const vehicleId = params.id as string;

  const { data: vehicleData, loading: vehicleLoading, refetch } = useVehicleQuery({ variables: { id: vehicleId }, skip: !vehicleId });
  const { data: apptData } = useAppointmentsQuery();
  const [updateVehicle, { loading: updating }] = useUpdateVehicleMutation();

  const [activeTab, setActiveTab] = useState('details');
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<VehicleForm>({ make: '', model: '', year: '', vin: '', licensePlate: '', color: '', notes: '', status: 'running', repairStatus: 'none' });
  const [saveError, setSaveError] = useState('');

  const vehicle = vehicleData?.vehicle;

  useEffect(() => {
    if (vehicle && !editing) {
      setForm({
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year?.toString() ?? '',
        vin: vehicle.vin ?? '',
        licensePlate: vehicle.licensePlate ?? '',
        color: vehicle.color ?? '',
        notes: vehicle.notes ?? '',
        status: vehicle.status ?? 'running',
        repairStatus: vehicle.repairStatus ?? 'none',
      });
    }
  }, [vehicle, editing]);

  const vehicleAppointments = useMemo(() => {
    if (!vehicle || !apptData?.appointments?.items) return [];
    return apptData.appointments.items.filter(
      (a) => a.vehicleMake === vehicle.make && a.vehicleModel === vehicle.model,
    );
  }, [vehicle, apptData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaveError('');
    try {
      const input: UpdateVehicleInput = {
        make: form.make || null,
        model: form.model || null,
        year: form.year ? parseInt(form.year) : null,
        vin: form.vin || null,
        licensePlate: form.licensePlate || null,
        color: form.color || null,
        notes: form.notes || null,
        status: form.status || null,
        repairStatus: form.repairStatus || null,
      } as UpdateVehicleInput;
      const res = await updateVehicle({ variables: { id: vehicleId, input } });
      if (!res.data?.updateVehicle) {
        setSaveError(res.errors?.[0]?.message || 'Failed to update vehicle');
        return;
      }
      setEditing(false);
      refetch();
    } catch (err: any) {
      setSaveError(err.message || 'An error occurred');
    }
  };

  const handleCancel = () => {
    if (vehicle) {
      setForm({
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year?.toString() ?? '',
        vin: vehicle.vin ?? '',
        licensePlate: vehicle.licensePlate ?? '',
        color: vehicle.color ?? '',
        notes: vehicle.notes ?? '',
        status: vehicle.status ?? 'running',
        repairStatus: vehicle.repairStatus ?? 'none',
      });
    }
    setEditing(false);
    setSaveError('');
  };

  if (vehicleLoading) {
    return (
      <>
        <PageHeader title="Vehicle Details" description="Loading..." />
        <Card title="Loading"><p className="text-sm text-muted">Loading vehicle data...</p></Card>
      </>
    );
  }

  if (!vehicle) {
    return (
      <>
        <PageHeader title="Vehicle Not Found" description="The vehicle could not be found." />
        <Card title="Not Found">
          <Button onClick={() => router.push('/automobile/vehicles')}>Back to Vehicles</Button>
        </Card>
      </>
    );
  }

  const status = vehicle.status ?? 'running';
  const repairStatus = vehicle.repairStatus ?? 'none';

  return (
    <>
      <PageHeader
        title={`${vehicle.make} ${vehicle.model}`}
        description={vehicle.licensePlate ? `License: ${vehicle.licensePlate}` : 'No license plate'}
      />
      <div className="mb-4 flex items-center gap-3">
        <Button variant="outline" onClick={() => router.push('/automobile/vehicles')}>
          ← Back to Vehicles
        </Button>
      </div>

      <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Card title="Vehicle Information">
              <div className="flex items-center justify-between mb-4">
                <div />
                {editing ? (
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleCancel} disabled={updating}>Cancel</Button>
                    <Button onClick={handleSave} disabled={updating}>{updating ? 'Saving...' : 'Save'}</Button>
                  </div>
                ) : (
                  <Button onClick={() => setEditing(true)}>Edit Vehicle</Button>
                )}
              </div>
              {saveError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{saveError}</div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Make</label>
                  {editing ? (
                    <input name="make" value={form.make} onChange={handleChange} className={inputClass} />
                  ) : (
                    <div className={readonlyClass}>{vehicle.make}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Model</label>
                  {editing ? (
                    <input name="model" value={form.model} onChange={handleChange} className={inputClass} />
                  ) : (
                    <div className={readonlyClass}>{vehicle.model}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Year</label>
                  {editing ? (
                    <input name="year" value={form.year} onChange={handleChange} placeholder="2024" className={inputClass} />
                  ) : (
                    <div className={readonlyClass}>{vehicle.year ?? 'N/A'}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Color</label>
                  {editing ? (
                    <input name="color" value={form.color} onChange={handleChange} placeholder="Silver" className={inputClass} />
                  ) : (
                    <div className={readonlyClass}>{vehicle.color ?? 'N/A'}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">VIN</label>
                  {editing ? (
                    <input name="vin" value={form.vin} onChange={handleChange} placeholder="1HGCM82633A004352" className={inputClass} />
                  ) : (
                    <div className={`${readonlyClass} font-mono text-xs`}>{vehicle.vin ?? 'N/A'}</div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">License Plate</label>
                  {editing ? (
                    <input name="licensePlate" value={form.licensePlate} onChange={handleChange} placeholder="ABC-1234" className={inputClass} />
                  ) : (
                    <div className={`${readonlyClass} font-mono`}>{vehicle.licensePlate ?? 'N/A'}</div>
                  )}
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Notes</label>
                  {editing ? (
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className={inputClass} />
                  ) : (
                    <div className={readonlyClass}>{vehicle.notes || 'No notes'}</div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card title="Status">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Vehicle Status</label>
                  {editing ? (
                    <select name="status" value={form.status} onChange={handleChange} className={inputClass}>
                      <option value="running">Running</option>
                      <option value="broken">Broken</option>
                      <option value="under_maintenance">Under Maintenance</option>
                      <option value="out_of_service">Out of Service</option>
                    </select>
                  ) : (
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[status] ?? ''}`}>
                      {statusLabels[status] ?? status}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Repair Status</label>
                  {editing ? (
                    <select name="repairStatus" value={form.repairStatus} onChange={handleChange} className={inputClass}>
                      <option value="none">None</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="awaiting_parts">Awaiting Parts</option>
                      <option value="waiting_pickup">Waiting Pickup</option>
                    </select>
                  ) : (
                    <div className={readonlyClass}>{repairStatusLabels[repairStatus] ?? repairStatus}</div>
                  )}
                </div>
              </div>
            </Card>

            <Card title="Quick Stats">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Total Repairs</span>
                  <span className="text-sm font-semibold">{vehicleAppointments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Created</span>
                  <span className="text-sm font-medium">{new Date(vehicle.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last Updated</span>
                  <span className="text-sm font-medium">{new Date(vehicle.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'repairs' && (
        <Card title="Repair History">
          {vehicleAppointments.length === 0 ? (
            <p className="text-sm text-gray-500">No repair history found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-600">Date</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-600">Service</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-600">Mechanic</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleAppointments.map((a) => (
                    <tr key={a.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 px-2">{a.scheduledDate}</td>
                      <td className="py-3 px-2">{a.serviceType}</td>
                      <td className="py-3 px-2">{a.assignedMechanic || 'N/A'}</td>
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      )}

      {activeTab === 'services' && (
        <Card title="Service History">
          <p className="text-sm text-gray-500">Service history will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'staff' && (
        <Card title="Assigned Staff">
          <p className="text-sm text-gray-500">Staff assignments will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'routes' && (
        <Card title="Route History">
          <p className="text-sm text-gray-500">Route history will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'fuel' && (
        <Card title="Fuel Logs">
          <p className="text-sm text-gray-500">Fuel history will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'income' && (
        <Card title="Income">
          <p className="text-sm text-gray-500">Income tracking will be shown here.</p>
        </Card>
      )}

      {activeTab === 'expenses' && (
        <Card title="Expenses">
          <p className="text-sm text-gray-500">Expense tracking will be shown here.</p>
        </Card>
      )}
    </>
  );
}
