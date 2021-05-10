//VM Api
import { BarInfo } from './bar-info.model';

//Mock
import { mockBarInfoList } from './bar-info.mock.data';

export const getBarInfo = async (): Promise<BarInfo> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockBarInfoList[0]);
    }, 500);
  });

export const getBarInfoList = async (): Promise<BarInfo[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockBarInfoList);
    }, 500);
  });

export const saveBarInfo = async (barInfo: BarInfo): Promise<boolean> => {
  //Mock
  console.log(barInfo);
  return true;
};
