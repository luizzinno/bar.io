//VM
import * as apiModel from 'core/api/bar-info/bar-info.model';
import * as viewModel from './bar-info.vm';

export const mapBarInfoFromApiToVm = (barInfo: apiModel.BarInfo): viewModel.BarInfo => ({
  ...barInfo,
});

export const mapBarInfoListFromApiToVm = (barInfoList: apiModel.BarInfo[]): viewModel.BarInfo[] =>
  barInfoList.map((e) => mapBarInfoFromApiToVm(e));

export const mapBarInfoFromVmToApi = (barInfo: viewModel.BarInfo): apiModel.BarInfo => ({
  ...barInfo,
});
