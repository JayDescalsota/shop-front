import { StatCard, Card, DataTable, PageHeader, Button } from '@autocare/ui';
import type { Stat, Column } from '@autocare/ui';
import type { InventoryItem } from '@/graphql/generated/index';

type InventoryRow = Pick<InventoryItem, 'id' | 'name' | 'sku' | 'quantityOnHand' | 'quantityAvailable' | 'reorderPoint'> & { status: string };

const stats: Stat[] = [
  { label: 'Total Items', value: '—' },
  { label: 'Low Stock', value: '—' },
  { label: 'Out of Stock', value: '—' },
  { label: 'Warehouses', value: '—' },
];

const columns: Column<InventoryRow>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Product' },
  { key: 'sku', header: 'SKU' },
  { key: 'quantityOnHand', header: 'On Hand' },
  { key: 'quantityAvailable', header: 'Available' },
  { key: 'reorderPoint', header: 'Min Stock' },
  { key: 'status', header: 'Status' },
];

export default function Inventory() {
  return (
    <>
      <PageHeader title="Inventory" description="Track stock levels across warehouses" />
      <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <Card title="Inventory Levels" action={<Button variant="outline">Export</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(i) => i.id} />
      </Card>
    </>
  );
}
