import { createArrayRepository } from 'core';
import { BarInfo } from 'dals';
import { v4 as uuidv4 } from 'uuid';

const repository = createArrayRepository<BarInfo>(() => uuidv4());

export const getBarInfoById = async (id: string): Promise<BarInfo> =>
  repository.getItemById(id) as BarInfo;

export const saveBarInfo = async (barInfo: BarInfo): Promise<BarInfo> =>
  repository.saveItem(barInfo);
