import { Card, DataTable, StatusBadge, PageHeader, Button } from '@autocare/ui';
import type { Column } from '@autocare/ui';

interface Mechanic {
  id: string; name: string; email: string; phone: string; specialty: string; appointments: number; rating: string; status: string;
}

const columns: Column<Mechanic>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'phone', header: 'Phone' },
  { key: 'specialty', header: 'Specialty' },
  { key: 'appointments', header: 'Appointments' },
  { key: 'rating', header: 'Rating' },
  { key: 'status', header: 'Status', render: (m) => <StatusBadge status={m.status} /> },
];

export default function Mechanics() {
  return (
    <>
      <PageHeader title="Mechanics" description="Manage your service team" />
      <Card title="All Mechanics" action={<Button>+ Add Mechanic</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(m) => m.id} />
      </Card>
    </>
  );
}
