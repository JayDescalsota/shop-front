import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const variants = {
  primary: 'bg-accent text-cyan-900 hover:bg-accent-dark',
  outline: 'bg-transparent border border-border text-primary hover:border-primary',
  ghost: 'bg-transparent text-muted hover:bg-surface hover:text-primary',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition ${variants[variant]} ${className}`}
      style={{ fontFamily: 'var(--font-inter)' }}
      {...props}
    >
      {children}
    </button>
  );
}
