interface ErrorBannerProps {
  message?: string | null;
}

export default function ErrorBanner({ message }: ErrorBannerProps) {
  if (!message) return null;
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
      {message}
    </div>
  );
}
