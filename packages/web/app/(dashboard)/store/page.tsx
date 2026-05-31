import { StatCard, PageHeader } from '@autocare/ui';
import type { Stat } from '@autocare/ui';

const stats: Stat[] = [
  { label: 'Products Listed', value: '—' },
  { label: 'Low Stock Items', value: '—' },
  { label: 'Active Suppliers', value: '—' },
  { label: 'Pending Orders', value: '—' },
];

export default function StoreDashboard() {
  return (
    <>
      <PageHeader title="Store Dashboard" description="Overview of your parts store operations" />
      <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </>
  );
}
