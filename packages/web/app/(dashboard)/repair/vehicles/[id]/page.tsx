'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, PageHeader, Button } from '@autocare/ui';
import { useVehicleQuery, useAppointmentsQuery, useCustomersQuery } from '@/graphql/generated/hooks';
import TabBar from '@/components/TabBar';
import VehicleInfoCard from '@/components/VehicleInfoCard';
import AppointmentTable from '@/components/AppointmentTable';

const tabs = [
  { id: 'details', label: 'Details', icon: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75' },
  { id: 'owner', label: 'Owner', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { id: 'service', label: 'Service', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { id: 'expenses', label: 'Expenses', icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' },
];

export default function RepairVehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const vehicleId = params.id as string;

  const { data: vehicleData, loading } = useVehicleQuery({ variables: { id: vehicleId }, skip: !vehicleId });
  const { data: customerData } = useCustomersQuery();
  const { data: apptData } = useAppointmentsQuery();

  const [activeTab, setActiveTab] = useState('details');

  const vehicle = vehicleData?.vehicle;
  const owner = customerData?.customers?.items?.find((c) => c.id === vehicle?.customerId);
  const appointments = apptData?.appointments?.items?.filter((a) =>
    a.vehicleMake === vehicle?.make && a.vehicleModel === vehicle?.model &&
    (a.vehiclePlate === vehicle?.licensePlate || !vehicle?.licensePlate)
  ) ?? [];

  if (loading) {
    return <><PageHeader title="Vehicle Details" description="Loading..." /><Card title="Loading"><p className="text-sm text-muted">Loading vehicle data...</p></Card></>;
  }

  if (!vehicle) {
    return (
      <><PageHeader title="Vehicle Not Found" description="The vehicle could not be found." /><Card title="Not Found"><Button onClick={() => router.push('/repair/vehicles')}>Back to Vehicles</Button></Card></>
    );
  }

  return (
    <>
      <PageHeader title={`${vehicle.make} ${vehicle.model}`} description={vehicle.licensePlate || 'No license plate'} />
      <div className="mb-4">
        <Button variant="outline" onClick={() => router.push('/repair/vehicles')}>← Back to Vehicles</Button>
      </div>

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'details' && (
        <VehicleInfoCard vehicle={vehicle} showQuickStats={false} />
      )}

      {activeTab === 'owner' && (
        <Card title="Owner Information">
          {owner ? (
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <label className="text-xs text-gray-500">Name</label>
                <p className="text-sm font-medium">{owner.name}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Email</label>
                <p className="text-sm">{owner.email || '—'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Phone</label>
                <p className="text-sm">{owner.phone || '—'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Address</label>
                <p className="text-sm">{owner.address || '—'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">City</label>
                <p className="text-sm">{owner.city || '—'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">State / Zip</label>
                <p className="text-sm">{owner.state || '—'}{owner.zip ? ` ${owner.zip}` : ''}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Status</label>
                <p className="text-sm"><span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${owner.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'}`}>{owner.status}</span></p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Last Visit</label>
                <p className="text-sm">{owner.lastVisit || '—'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Vehicles</label>
                <p className="text-sm font-medium">{owner.totalVehicles}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Visits</label>
                <p className="text-sm font-medium">{owner.totalVisits}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Total Spent</label>
                <p className="text-sm font-medium">${typeof owner.totalSpent === 'number' ? owner.totalSpent.toFixed(2) : owner.totalSpent}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Notes</label>
                <p className="text-sm">{owner.notes || '—'}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400">No owner information available.</p>
          )}
        </Card>
      )}

      {activeTab === 'service' && (
        <Card title="Service History">
          <AppointmentTable
            appointments={appointments}
            emptyMessage="No service records found."
            columns={[
              { key: 'type', header: 'Type', render: (a) => (
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                  a.shopId ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                }`}>{a.shopId ? 'Service' : 'Repair'}</span>
              )},
              { key: 'scheduledDate', header: 'Date' },
              { key: 'serviceType', header: 'Service Type' },
              { key: 'description', header: 'Description', render: (a) => <span className="text-gray-500">{a.description || '—'}</span> },
              { key: 'status', header: 'Status', render: (a) => <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                a.status === 'completed' ? 'bg-green-50 text-green-700' :
                a.status === 'on_going' ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-500'
              }`}>{a.status?.replace('_', ' ') || a.status}</span> },
            ]}
          />
        </Card>
      )}

      {activeTab === 'expenses' && (
        <Card title="Expenses">
          <p className="text-sm text-gray-400">Expense tracking coming soon.</p>
        </Card>
      )}
    </>
  );
}
