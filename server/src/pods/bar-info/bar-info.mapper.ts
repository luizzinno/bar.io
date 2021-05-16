import * as apiModel from './bar-info.model';
import * as model from 'dals/bar-info/bar-info.model';

export const mapFromBarInfoModelToApiModel = (
  barInfo: model.BarInfo
): apiModel.BarInfo =>
  !!barInfo
    ? {
      id: barInfo?._id ?? '',
      infoA: barInfo?.infoA ?? '',
      infoB: barInfo?.infoB ?? '',
      infoC: barInfo?.infoC ?? '',
    }
    : null;

export const mapFromBarInfoApiModelToModel = (
  barInfo: apiModel.BarInfo
): model.BarInfo =>
  !!barInfo
    ? {
      _id: barInfo?.id ?? '',
      infoA: barInfo?.infoA ?? '',
      infoB: barInfo?.infoB ?? '',
      infoC: barInfo?.infoC ?? '',
    }
    : null;

