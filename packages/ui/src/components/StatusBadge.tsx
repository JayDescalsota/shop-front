interface StatusBadgeProps {
  status: string;
}

const statusMap: Record<string, string> = {
  completed: 'status-completed',
  paid: 'status-paid',
  pending: 'status-pending',
  'in progress': 'status-in-progress',
  cancelled: 'status-cancelled',
  overdue: 'status-overdue',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const key = status.toLowerCase();
  const cls = statusMap[key] || 'bg-gray-100 text-gray-700';
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${cls}`}>
      {status}
    </span>
  );
}
