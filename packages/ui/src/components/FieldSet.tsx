import type { ReactNode } from 'react';

interface FieldSetProps {
  legend: string;
  children: ReactNode;
}

export default function FieldSet({ legend, children }: FieldSetProps) {
  return (
    <fieldset className="border border-border rounded-lg p-4">
      <legend className="text-xs font-semibold text-muted px-2">{legend}</legend>
      {children}
    </fieldset>
  );
}
