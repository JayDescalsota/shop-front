'use client';

import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider as Provider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { type ReactNode } from 'react';

const httpLink = createHttpLink({ uri: '/api/graphql' });

function parseJwtPayload(token: string): Record<string, unknown> {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return {};
  }
}

const authLink = setContext((_, { headers }) => {
  if (typeof window === 'undefined') return { headers };
  const token = localStorage.getItem('token');
  if (!token) return { headers };
  const payload = parseJwtPayload(token);
  const selectedTenantId = localStorage.getItem('selectedTenantId') || (payload.tenant_id as string) || '';
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      'x-user-id': (payload.sub as string) || '',
      'x-tenant-id': selectedTenantId,
      'x-app-id': (payload.app as string[])?.[0] || '',
      'x-branch-id': '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network', errorPolicy: 'all' },
    mutate: { errorPolicy: 'all' },
  },
});

export function ApolloProvider({ children }: { children: ReactNode }) {
  return <Provider client={client}>{children}</Provider>;
}
