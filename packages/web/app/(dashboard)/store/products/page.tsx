import { Card, DataTable, PageHeader, Button } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import type { InventoryItem, Supplier } from '@/graphql/generated/index';

type ProductRow = Pick<InventoryItem, 'id' | 'name' | 'sku' | 'unitPrice' | 'quantityOnHand'> & { category: string };

const columns: Column<ProductRow>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'sku', header: 'SKU' },
  { key: 'category', header: 'Category' },
  { key: 'unitPrice', header: 'Price' },
  { key: 'quantityOnHand', header: 'Stock' },
];

export default function Products() {
  return (
    <>
      <PageHeader title="Products" description="Manage your parts and accessories catalog" />
      <Card title="All Products" action={<Button>+ Add Product</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(p) => p.id} />
      </Card>
    </>
  );
}
