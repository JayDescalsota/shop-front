'use client';

import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider as Provider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { type ReactNode } from 'react';

const httpLink = createHttpLink({ uri: '/api/graphql' });

const authLink = setContext((_, { headers }) => {
  if (typeof window === 'undefined') return { headers };
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
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
