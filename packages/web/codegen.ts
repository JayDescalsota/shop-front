import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './graphql/*-schema.graphql',
  documents: './graphql/*-operations.graphql',
  generates: {
    './graphql/generated/index.ts': {
      plugins: ['typescript'],
    },
    './graphql/generated/hooks.tsx': {
      schema: './graphql/*-schema.graphql',
      documents: './graphql/*-operations.graphql',
      plugins: ['typescript-operations', 'typescript-react-query'],
      config: {
        reactQueryVersion: 5,
        exposeFetcher: true,
        exposeQueryKeys: true,
        fetcher: {
          func: '../../lib/fetcher#request',
          isReactHook: false,
        },
      },
    },
  },
};

export default config;
