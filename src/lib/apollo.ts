import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omi6ou0ova01w773047c3t/master',
  cache: new InMemoryCache()
})