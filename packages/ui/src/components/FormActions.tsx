import Button from './Button';

interface FormActionsProps {
  onCancel: () => void;
  submitting?: boolean;
  submitLabel?: string;
}

export default function FormActions({ onCancel, submitting = false, submitLabel = 'Save' }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3 pt-2">
      <Button variant="outline" type="button" onClick={onCancel}>Cancel</Button>
      <Button type="submit" disabled={submitting}>{submitting ? 'Saving...' : submitLabel}</Button>
    </div>
  );
}
