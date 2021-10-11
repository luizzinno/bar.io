import { gql } from 'apollo-server-express';

export const barInfoTypeDefs = gql`
  type BarInfo {
    id: ID!
    infoA: String!
    infoB: String
    infoC: String
  }

  extend type Query {
    getBarInfo: BarInfo
    getBarInfoById: BarInfo
    getBarInfoByInfoA: BarInfo
    getBarInfoList: [BarInfo]
  }

  input BarInfoInput {
    id: ID
    infoA: String!
    infoB: String
    infoC: String
  }

  extend type Mutation {
    saveBarInfo(barInfo: BarInfoInput!): Boolean
  }
`;
