import { GraphQLResolver } from 'common/models';
import { barInfoRepository } from 'dals';
import { BarInfo } from './bar-info.model';
import {
  mapFromBarInfoApiModelToModel,
  mapFromBarInfoModelToApiModel,
} from './bar-info.mapper';

interface BarInfoResolver {
  Query: {
    getBarInfo: GraphQLResolver<BarInfo>;
  };
  Mutation: {
    saveBarInfo: GraphQLResolver<boolean, { barInfo: BarInfo }>;
  };
}

export const barInfoResolver: BarInfoResolver = {
  Query: {
    getBarInfo: async (parent, { }, context): Promise<BarInfo> =>
      mapFromBarInfoModelToApiModel(await barInfoRepository.getBarInfo()),
  },
  Mutation: {
    saveBarInfo: async (parent, { barInfo }, context): Promise<boolean> => {
      await barInfoRepository.saveBarInfo(mapFromBarInfoApiModelToModel(barInfo));
      return true;
    },
  },
};
