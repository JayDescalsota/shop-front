import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, action, children }: CardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
