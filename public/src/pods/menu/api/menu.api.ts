import { Menu } from './menu.api.model';
import { gql } from 'graphql-request';
import * as apiClient from 'core/api';

export const getMenu = async (): Promise<Menu> =>
  await apiClient.request<Menu>(
    gql`
      query { 
        getMenu {
          restaurantInfo {
            infoA
            infoB
            infoC
          }
          categories {
            name
            products {
              name
              description
              portions {
                name
                price
              }
            }
          }
        }
      }`
  );