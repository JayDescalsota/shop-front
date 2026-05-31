import { StatCard, PageHeader } from '@autocare/ui';
import type { Stat } from '@autocare/ui';

const stats: Stat[] = [
  { label: 'Appointments Today', value: '—' },
  { label: 'In Progress', value: '—' },
  { label: 'Pending Invoices', value: '—' },
  { label: 'Active Customers', value: '—' },
];

export default function RepairDashboard() {
  return (
    <>
      <PageHeader title="Repair Dashboard" description="Overview of your auto repair shop" />
      <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </>
  );
}
