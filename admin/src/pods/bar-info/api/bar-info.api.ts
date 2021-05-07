//VM Api
import { BarInfo } from './bar-info.api-model';
import * as apiClient from 'core/api/client';
import { gql } from 'graphql-request';


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
