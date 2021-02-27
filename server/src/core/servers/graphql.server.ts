import { Express } from 'express';
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';

export const createGraphQlServer = (
  app: Express,
  config: ApolloServerExpressConfig
) => {
  const graphQlServer = new ApolloServer(config);
  graphQlServer.applyMiddleware({ app });
  return graphQlServer;
};
