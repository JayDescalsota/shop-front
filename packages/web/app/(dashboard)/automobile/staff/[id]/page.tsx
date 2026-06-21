'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, PageHeader, Button } from '@autocare/ui';
import { useStaffDetailQuery, useUpdateStaffMutation } from '@/graphql/generated/hooks';
import { StaffInfoCard, StaffEmploymentCard, StaffForm } from '@/components/StaffInfoCard';
import type { StaffInfo } from '@/components/StaffInfoCard';

const tabs = [
  { id: 'details', label: 'Details', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { id: 'vehicles', label: 'Vehicles', icon: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776' },
  { id: 'training', label: 'Training', icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5' },
  { id: 'employee', label: 'Employee', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' },
  { id: 'certification', label: 'Certification', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'schedule', label: 'Schedule', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
];

export default function StaffDetailPage() {
  const params = useParams();
  const router = useRouter();
  const staffId = params.id as string;

  const { data, isLoading, refetch } = useStaffDetailQuery({ id: staffId }, { enabled: !!staffId });
  const { mutateAsync: updateStaff, isPending: updating } = useUpdateStaffMutation();

  const [activeTab, setActiveTab] = useState('details');

  const staff = data?.staff as StaffInfo | undefined;

  const handleSave = async (form: StaffForm) => {
    const res = await updateStaff({
      id: staffId,
      input: {
        name: form.name || null, role: form.role || null, email: form.email || null, phone: form.phone || null,
        licenseNumber: form.licenseNumber || null, licenseClass: form.licenseClass || null,
        licenseExpiry: form.licenseExpiry || null, dateOfBirth: form.dateOfBirth || null,
        address: form.address || null, emergencyContact: form.emergencyContact || null,
        emergencyPhone: form.emergencyPhone || null, status: form.status || null,
        notes: form.notes || null, hireDate: form.hireDate || null,
      },
    });
    if (!res?.updateStaff) throw new Error('Failed to update staff');
    refetch();
  };

  if (isLoading) {
    return <><PageHeader title="Staff Details" description="Loading..." /><Card title="Loading"><p className="text-sm text-muted">Loading staff data...</p></Card></>;
  }

  if (!staff) {
    return (
      <><PageHeader title="Staff Not Found" description="The staff member could not be found." /><Card title="Not Found"><Button onClick={() => router.push('/automobile/staff')}>Back to Staff</Button></Card></>
    );
  }

  return (
    <>
      <PageHeader title={staff.name} description={`Role: ${staff.role}`} />
      <div className="mb-4 flex items-center gap-3">
        <Button variant="outline" onClick={() => router.push('/automobile/staff')}>← Back to Staff</Button>
      </div>

      <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
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
            <StaffInfoCard staff={staff} saving={updating} onSave={handleSave} />
          </div>
          <div className="flex flex-col gap-4">
            <StaffEmploymentCard staff={staff} />
          </div>
        </div>
      )}

      {activeTab === 'vehicles' && (
        <Card title="Assigned Vehicles">
          <p className="text-sm text-gray-500">Vehicle assignments will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'training' && (
        <Card title="Training Records">
          <p className="text-sm text-gray-500">Training history will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'employee' && (
        <Card title="Employee Information">
          <p className="text-sm text-gray-500">Employment details will be shown here.</p>
        </Card>
      )}

      {activeTab === 'certification' && (
        <Card title="Certifications">
          <p className="text-sm text-gray-500">Staff certifications will be tracked here.</p>
        </Card>
      )}

      {activeTab === 'schedule' && (
        <Card title="Schedule">
          <p className="text-sm text-gray-500">Staff schedule and availability will be shown here.</p>
        </Card>
      )}
    </>
  );
}
