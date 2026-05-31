interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-sm text-muted mt-1" style={{ fontFamily: 'var(--font-open-sans)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
