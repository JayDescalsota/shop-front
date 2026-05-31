'use client';

import type { ReactNode, CSSProperties } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'sm' | 'md' | 'lg' | 'xs';
  children: ReactNode;
}

const sizeStyles: Record<string, CSSProperties> = {
  s: { maxWidth: 384, width: '100%', margin: '0 16px' },
  m: { maxWidth: 512, width: '100%', margin: '0 16px' },
  l: { maxWidth: 672, width: '100%', margin: '0 16px' },
  xl: { width: '80%' },
};

function normalize(size: string): string {
  const map: Record<string, string> = { xs: 's', sm: 's', md: 'm', lg: 'l', xl: 'xl' };
  return map[size] || size;
}

export default function Modal({ open, onClose, title, size = 'm', children }: ModalProps) {
  if (!open) return null;
  const resolved = normalize(size);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={onClose} />
      <div style={sizeStyles[resolved]} className="relative bg-card border border-border rounded-xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-muted hover:text-primary cursor-pointer text-xl leading-none">&times;</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
