import { StatCard, Card, DataTable, StatusBadge, PageHeader, Button } from '@autocare/ui';
import type { Stat, Column } from '@autocare/ui';

interface Invoice {
  id: string; customer: string; vehicle: string; services: string; total: string; date: string; paidDate: string; status: string;
}

const stats: Stat[] = [
  { label: 'Outstanding', value: '—' },
  { label: 'Overdue', value: '—' },
  { label: 'This Month', value: '—' },
];

const columns: Column<Invoice>[] = [
  { key: 'id', header: 'Invoice#' },
  { key: 'customer', header: 'Customer' },
  { key: 'vehicle', header: 'Vehicle' },
  { key: 'services', header: 'Services' },
  { key: 'total', header: 'Total' },
  { key: 'date', header: 'Date' },
  { key: 'paidDate', header: 'Paid' },
  { key: 'status', header: 'Status', render: (i) => <StatusBadge status={i.status} /> },
];

export default function Invoices() {
  return (
    <>
      <PageHeader title="Invoices" description="Manage billing and payments" />
      <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <Card title="All Invoices" action={<Button>+ New Invoice</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(i) => i.id} />
      </Card>
    </>
  );
}
