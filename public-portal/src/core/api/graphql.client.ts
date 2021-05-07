import { GraphQLClient } from 'graphql-request';
import { envConstants } from 'core/constants';

export const graphQLClient = new GraphQLClient(envConstants.BASE_API_URL);
