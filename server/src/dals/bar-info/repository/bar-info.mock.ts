
import { createMockRepository } from 'common/helpers';
import { BarInfo } from 'dals';
import { v4 as uuidv4 } from 'uuid';

const repository = createMockRepository<BarInfo>(() => uuidv4());

export const getBarInfo = async (): Promise<BarInfo> =>
  repository.getFirstItem() as BarInfo;

export const getBarInfoById = async(
  id: string
): Promise<BarInfo> =>
  repository.getItemById(id);

export const getBarInfoByInfoA = async (
  infoA: string
): Promise<BarInfo> =>
  repository.getItemByPropValue("infoA", infoA);

export const getBarInfoList = async (): Promise<BarInfo[]> =>
  repository.getCollection() as BarInfo[];

export const saveBarInfo = async (barInfo: BarInfo): Promise<void> =>
  repository.saveItem(barInfo);
