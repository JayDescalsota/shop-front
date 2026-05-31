import { StatCard, Card, DataTable, StatusBadge, PageHeader, Button } from '@autocare/ui';
import type { Stat, Column } from '@autocare/ui';
import type { PurchaseOrder, Supplier } from '@/graphql/generated/index';

type PurchaseOrderRow = Pick<PurchaseOrder, 'id' | 'orderNumber' | 'totalAmount' | 'expectedDate' | 'status'> & { supplier: string; items: number };

const stats: Stat[] = [
  { label: 'Open Orders', value: '—' },
  { label: 'Pending Delivery', value: '—' },
  { label: 'Monthly Spend', value: '—' },
];

const columns: Column<PurchaseOrderRow>[] = [
  { key: 'orderNumber', header: 'PO#' },
  { key: 'supplier', header: 'Supplier' },
  { key: 'items', header: 'Items' },
  { key: 'totalAmount', header: 'Total' },
  { key: 'expectedDate', header: 'Delivery' },
  { key: 'status', header: 'Status', render: (po) => <StatusBadge status={po.status} /> },
];

export default function PurchaseOrders() {
  return (
    <>
      <PageHeader title="Purchase Orders" description="Manage orders to suppliers" />
      <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <Card title="All Purchase Orders" action={<Button>+ New Order</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(po) => po.id} />
      </Card>
    </>
  );
}
