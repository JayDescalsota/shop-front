import type { Stat } from '../types';

export default function StatCard({ label, value, change, changeColor }: Stat) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-sm transition">
      <div className="text-xs text-muted font-semibold uppercase tracking-wide" style={{ fontFamily: 'var(--font-open-sans)' }}>
        {label}
      </div>
      <div className="text-3xl font-bold mt-2 text-primary" style={{ fontFamily: 'var(--font-poppins)' }}>
        {value}
      </div>
      {change && (
        <div className="text-xs mt-1 font-medium" style={{ color: changeColor || '#059669' }}>
          {change}
        </div>
      )}
    </div>
  );
}
