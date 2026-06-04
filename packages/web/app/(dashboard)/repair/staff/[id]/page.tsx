'use client';

import { useParams, useRouter } from 'next/navigation';
import { Card, PageHeader, Button } from '@autocare/ui';
import { useStaffDetailQuery, useUpdateStaffMutation } from '@/graphql/generated/hooks';
import { StaffInfoCard, StaffEmploymentCard } from '@/components/StaffInfoCard';
import type { StaffInfo, StaffForm } from '@/components/StaffInfoCard';

export default function RepairStaffDetailPage() {
  const params = useParams();
  const router = useRouter();
  const staffId = params.id as string;

  const { data, loading, refetch } = useStaffDetailQuery({ variables: { id: staffId }, skip: !staffId });
  const [updateStaff, { loading: updating }] = useUpdateStaffMutation();

  const staff = data?.staff as StaffInfo | undefined;

  const handleSave = async (form: StaffForm) => {
    const res = await updateStaff({
      variables: {
        id: staffId,
        input: {
          name: form.name || null, role: form.role || null, email: form.email || null, phone: form.phone || null,
          licenseNumber: form.licenseNumber || null, licenseClass: form.licenseClass || null,
          licenseExpiry: form.licenseExpiry || null, dateOfBirth: form.dateOfBirth || null,
          address: form.address || null, emergencyContact: form.emergencyContact || null,
          emergencyPhone: form.emergencyPhone || null, status: form.status || null,
          notes: form.notes || null, hireDate: form.hireDate || null,
        },
      },
      errorPolicy: 'all',
    });
    if (!res.data?.updateStaff) throw new Error(res.errors?.[0]?.message || 'Failed to update staff');
    refetch();
  };

  if (loading) {
    return <><PageHeader title="Staff Details" description="Loading..." /><Card title="Loading"><p className="text-sm text-muted">Loading staff data...</p></Card></>;
  }

  if (!staff) {
    return (
      <><PageHeader title="Staff Not Found" description="The staff member could not be found." /><Card title="Not Found"><Button onClick={() => router.push('/repair/staff')}>Back to Staff</Button></Card></>
    );
  }

  return (
    <>
      <PageHeader title={staff.name} description={`Role: ${staff.role}`} />
      <div className="mb-4">
        <Button variant="outline" onClick={() => router.push('/repair/staff')}>← Back to Staff</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <StaffInfoCard staff={staff} saving={updating} onSave={handleSave} />
        </div>
        <div className="flex flex-col gap-4">
          <StaffEmploymentCard staff={staff} />
        </div>
      </div>
    </>
  );
}
