import { BarInfo, BarInfoContext } from 'dals';
import { mongo } from 'mongoose';

export const getBarInfoById = async (id: string): Promise<BarInfo> => {
  if (!id) throw 'id cannot be empty';
  return await BarInfoContext.findById(id);
};

export const saveBarInfo = async (barInfo: BarInfo): Promise<BarInfo> => {  
  if (!barInfo) throw 'barInfo cannot be null or undefined';
  if(!barInfo._id) barInfo._id = new mongo.ObjectID();
  return BarInfoContext.findByIdAndUpdate(barInfo._id, barInfo, {new: true, upsert: true}).lean();
};
