'use client';

interface AppointmentRow {
  id: string;
  scheduledDate: string;
  serviceType: string;
  description?: string | null;
  assignedMechanic?: string | null;
  bay?: string | null;
  status: string;
}

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface AppointmentTableProps {
  appointments: AppointmentRow[];
  columns?: Column<AppointmentRow>[];
  label?: string;
  emptyMessage?: string;
}

const statusBadge = (status: string) => {
  const colors: Record<string, string> = {
    queued: 'bg-gray-50 text-gray-600 border border-gray-200',
    on_going: 'bg-blue-50 text-blue-700 border border-blue-200',
    road_test: 'bg-purple-50 text-purple-700 border border-purple-200',
    repaired: 'bg-green-50 text-green-700 border border-green-200',
    waiting_parts: 'bg-amber-50 text-amber-700 border border-amber-200',
    waiting_pickup: 'bg-orange-50 text-orange-700 border border-orange-200',
    completed: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    cancelled: 'bg-red-50 text-red-700 border border-red-200',
    no_show: 'bg-gray-50 text-gray-500 border border-gray-200',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-gray-50 text-gray-500'}`}>
      {status?.replace('_', ' ') || status}
    </span>
  );
};

const defaultColumns: Column<AppointmentRow>[] = [
  { key: 'scheduledDate', header: 'Date' },
  { key: 'serviceType', header: 'Service' },
  {
    key: 'mechanic', header: 'Mechanic',
    render: (a) => <span>{a.assignedMechanic || '—'}</span>,
  },
  {
    key: 'status', header: 'Status',
    render: (a) => statusBadge(a.status),
  },
];

export default function AppointmentTable({
  appointments,
  columns = defaultColumns,
  label = 'Appointments',
  emptyMessage = 'No records found.',
}: AppointmentTableProps) {
  if (appointments.length === 0) {
    return <p className="text-sm text-gray-500">{emptyMessage}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((col) => (
              <th key={col.key} className="text-left py-3 px-2 font-semibold text-gray-600">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b border-gray-50 hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-2">
                  {col.render ? col.render(a) : (a as any)[col.key] ?? 'N/A'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { statusBadge as appointmentStatusBadge };
