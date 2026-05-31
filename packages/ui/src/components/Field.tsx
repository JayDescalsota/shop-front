import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';

interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

export default function Field({ label, required, children }: FieldProps) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted block mb-1">
        {label}{required ? ' *' : ''}
      </label>
      {children}
    </div>
  );
}

const inputClasses = 'w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-primary placeholder:text-muted outline-none focus:border-accent transition';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

Field.Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input ref={ref} className={`${inputClasses} ${className}`} {...props} />
  ),
);
Field.Input.displayName = 'Field.Input';

Field.Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea ref={ref} className={`${inputClasses} resize-none ${className}`} {...props} />
  ),
);
Field.Textarea.displayName = 'Field.Textarea';
