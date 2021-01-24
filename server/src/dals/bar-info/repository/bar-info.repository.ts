import { BarInfo, BarInfoContext } from 'dals';

export const getBarInfoById = async (id: string): Promise<BarInfo> => {
  if (!!!id) throw 'id cannot be empty';
  return await BarInfoContext.findById(id);
};

export const saveBarInfo = async (barInfo: BarInfo): Promise<BarInfo> => {  
  if (!!!barInfo) throw 'barInfo cannot be null or undefined';
  const barInfoModel = await BarInfoContext.create(barInfo);
  return await BarInfoContext.findByIdAndUpdate(barInfoModel._id, barInfoModel, {
    new: true,
    upsert: true,
  });
};
