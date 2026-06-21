'use client';

import { useParams, useRouter } from 'next/navigation';
import { Card, PageHeader, Button } from '@autocare/ui';
import { useStaffDetailQuery, useUpdateStaffMutation, useStaffActiveAssignmentsQuery } from '@/graphql/generated/hooks';
import { StaffInfoCard, StaffEmploymentCard } from '@/components/StaffInfoCard';
import type { StaffInfo, StaffForm } from '@/components/StaffInfoCard';

export default function RepairStaffDetailPage() {
  const params = useParams();
  const router = useRouter();
  const staffId = params.id as string;

  const { data, isLoading, refetch } = useStaffDetailQuery({ id: staffId }, { enabled: !!staffId });
  const { mutateAsync: updateStaff, isPending: updating } = useUpdateStaffMutation();
  const { data: assignData } = useStaffActiveAssignmentsQuery({ staffId }, { enabled: !!staffId });

  const staff = data?.staff as StaffInfo | undefined;
  const activeAssignments = assignData?.staffActiveAssignments ?? [];

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
          <Card title="Active Assignments">
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-accent">{activeAssignments.length}</p>
              <p className="text-xs text-muted mt-1">{activeAssignments.length === 1 ? 'assignment' : 'assignments'} in progress</p>
            </div>
            {activeAssignments.length > 0 && (
              <div className="border-t border-border pt-3 mt-1 space-y-2">
                {activeAssignments.map((a) => (
                  <div key={a.id} className="flex items-center justify-between text-xs">
                    <span className="text-primary font-medium">{a.staffName}</span>
                    <span className={`px-1.5 py-0.5 rounded ${
                      a.status === 'assigned' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                    }`}>{a.status.replace('_', ' ')}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
          <StaffEmploymentCard staff={staff} />
        </div>
      </div>
    </>
  );
}
