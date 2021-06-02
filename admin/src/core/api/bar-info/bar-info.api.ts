//VM Api
import { BarInfo } from './bar-info.model';
import * as apiClient from 'core/api/client';
import { gql } from 'graphql-request';

//Mock
import { mockBarInfoList } from './bar-info.mock.data';

export const getBarInfo = async (): Promise<BarInfo> =>
  await apiClient.request<BarInfo>(
    gql`
      query { 
        getBarInfo {
          infoA
          infoB
          infoC
        }
      }`
  );

  export const getBarInfoList = async (): Promise<BarInfo[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockBarInfoList);
    }, 500);
  });

export const saveBarInfo = async (barInfo: BarInfo): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($barInfo: BarInfoInput!) {
        saveBarInfo(barInfo: $barInfo)
      }
    `,
    {
      barInfo,
    },
  );
