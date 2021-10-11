import { GraphQLResolver } from 'common/models';
import { barInfoRepository } from 'dals';
import { BarInfo } from './bar-info.model';
import {
  mapFromBarInfoApiModelToModel,
  mapFromBarInfoModelCollectionToApiModel,
  mapFromBarInfoModelToApiModel,
} from './bar-info.mapper';

interface BarInfoResolver {
  Query: {
    getBarInfo: GraphQLResolver<BarInfo>;
    getBarInfoById: GraphQLResolver<BarInfo, { id: string }>;
    getBarInfoByInfoA: GraphQLResolver<BarInfo, { infoA: string }>;
    getBarInfoList: GraphQLResolver<BarInfo[]>;
  };
  Mutation: {
    saveBarInfo: GraphQLResolver<boolean, { barInfo: BarInfo }>;
  };
}

export const barInfoResolver: BarInfoResolver = {
  Query: {
    getBarInfo: async (parent, { }, context): Promise<BarInfo> =>
      mapFromBarInfoModelToApiModel(await barInfoRepository.getBarInfo()),
    getBarInfoById: async (parent, { id }, context): Promise<BarInfo> =>
      mapFromBarInfoModelToApiModel(await barInfoRepository.getBarInfoById(id)),
    getBarInfoByInfoA: async (parent, { infoA }, context): Promise<BarInfo> =>
    mapFromBarInfoModelToApiModel(await barInfoRepository.getBarInfoByInfoA(infoA)),
    getBarInfoList: async (parent, {}, context): Promise<BarInfo[]> =>
      mapFromBarInfoModelCollectionToApiModel(await barInfoRepository.getBarInfoList()),
  },
  Mutation: {
    saveBarInfo: async (parent, { barInfo }, context): Promise<boolean> => {
      await barInfoRepository.saveBarInfo(mapFromBarInfoApiModelToModel(barInfo));
      return true;
    },
  },
};
