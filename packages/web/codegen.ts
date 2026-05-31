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
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
