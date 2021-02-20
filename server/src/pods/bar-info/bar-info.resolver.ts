import { GraphQLResolver } from 'common/models';
import { barInfoRepository } from 'dals';
import { BarInfo } from './bar-info.model';
import {
  mapFromBarInfoApiModelToModel,
  mapFromBarInfoModelToApiModel,
} from './bar-info.mapper';

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
      mapFromBarInfoModelToApiModel(await barInfoRepository.getBarInfoById(id)),
  },
  Mutation: {
    saveBarInfo: async (parent, { barInfo }, context): Promise<BarInfo> =>
      mapFromBarInfoModelToApiModel(
        await barInfoRepository.saveBarInfo(mapFromBarInfoApiModelToModel(barInfo))
      ),
  },
};
