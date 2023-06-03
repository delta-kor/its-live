import { GraphQLClient } from 'graphql-request';

export const GraphQL = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
  fetch,
  next: {
    revalidate: 0,
  },
});
