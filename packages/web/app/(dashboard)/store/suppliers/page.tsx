import { Card, DataTable, PageHeader, Button } from '@autocare/ui';
import type { Column } from '@autocare/ui';
import type { Supplier } from '@/graphql/generated/index';

type SupplierRow = Pick<Supplier, 'id' | 'name' | 'contactPerson' | 'email' | 'phone' | 'isActive'> & { products: number };

const columns: Column<SupplierRow>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'contactPerson', header: 'Contact' },
  { key: 'email', header: 'Email' },
  { key: 'phone', header: 'Phone' },
  { key: 'products', header: 'Products' },
  { key: 'isActive', header: 'Status' },
];

export default function Suppliers() {
  return (
    <>
      <PageHeader title="Suppliers" description="Manage your parts vendors" />
      <Card title="All Suppliers" action={<Button>+ Add Supplier</Button>}>
        <DataTable columns={columns} data={[]} keyExtractor={(s) => s.id} />
      </Card>
    </>
  );
}
