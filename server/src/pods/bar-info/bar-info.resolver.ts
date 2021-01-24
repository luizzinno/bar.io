import { GraphQLResolver } from 'common/models';
import { BarInfo, barInfoRepository } from 'dals';

interface BarInfoResolver {
  Query: {
    getBarInfoById: GraphQLResolver<BarInfo, { id: string }>;
  };
  Mutation: {
    saveBarInfo: GraphQLResolver<BarInfo, { barInfo: BarInfo }>;
  };
}

export const barInfoResolver: BarInfoResolver = {
  Query: {
    getBarInfoById: async (parent, { id }, context): Promise<BarInfo> =>
      await barInfoRepository.getBarInfoById(id),
  },
  Mutation: {
    saveBarInfo: async (parent, { barInfo }, context): Promise<BarInfo> =>
      await barInfoRepository.saveBarInfo(barInfo),
  },
};
