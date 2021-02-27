import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const parseDate = (value) => new Date(value);
const serializeDate = (value) => value.getTime();
const parseLiteralDate = (ast) => {
  if (ast.kind === Kind.INT) {
    return new Date(ast.value); // ast value is always in string format
  }
  return null;
};

export const coreResolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: parseDate, // value from the client
    serialize: serializeDate, // value sent to the client
    parseLiteral: parseLiteralDate,
  }),
};