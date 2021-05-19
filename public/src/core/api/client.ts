import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

const url = process.env.API_URL;
const graphQLClient = new GraphQLClient(url);

export const request = async <T>(query: RequestDocument, variables?: any, requestHeaders?: HeadersInit): Promise<T> => {
    const result = (await graphQLClient.request(query, variables, requestHeaders));
    return result[Object.keys(result)[0]];
}

