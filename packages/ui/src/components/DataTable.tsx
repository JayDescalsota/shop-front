import type { Column } from '../types';

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
}

export default function DataTable<T>({
  columns,
  data,
  keyExtractor,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-muted text-sm" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={keyExtractor(item)}>
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-3.5 text-sm border-b border-border text-primary last-of-type:border-b-0">
                {col.render ? col.render(item) : (item as Record<string, unknown>)[col.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
