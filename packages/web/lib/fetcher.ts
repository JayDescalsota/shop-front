function parseJwtPayload(token: string): Record<string, unknown> {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return {};
  }
}

function buildHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  if (!token) return { 'Content-Type': 'application/json' };
  const payload = parseJwtPayload(token);
  const selectedTenantId = localStorage.getItem('selectedTenantId') || (payload.tenant_id as string) || '';
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'x-user-id': (payload.sub as string) || '',
    'x-tenant-id': selectedTenantId,
    'x-app-id': ((payload.app as string[]) ?? [])?.[0] || '',
    'x-branch-id': '',
  };
}

export function request<TData, TVariables extends Record<string, unknown> = Record<string, unknown>>(
  document: string | { toString(): string },
  variables?: TVariables,
  _options?: RequestInit['headers'],
): () => Promise<TData> {
  return async () => {
    const res = await fetch('/api/graphql', {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify({ query: String(document), variables }),
    });
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0]?.message || 'GraphQL error');
    return json.data as TData;
  };
}
