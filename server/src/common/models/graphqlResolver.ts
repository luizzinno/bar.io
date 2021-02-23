import { Request, Response } from 'express';
import { IGraphQLToolsResolveInfo } from 'apollo-server-express';

// We could add more specific types when we need it.
// https://graphql.org/learn/execution/#root-fields-resolvers
// https://www.apollographql.com/docs/tutorial/resolvers/#what-is-a-resolver

export interface Context {
  req: Request;
  res: Response;
}

export type GraphQLResolver<ReturnedType, Args = {}> = (
  rootObject: any,
  args: Args,
  context: Context,
  info: IGraphQLToolsResolveInfo
) => Promise<ReturnedType>;
