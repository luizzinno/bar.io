//VM Api
import { RestaurantInfo } from './restaurant.api-model';
import { Credential } from './credential.api-model';

//Mock
import { mockRestaurantInfo } from './restaurant.mock.data';

export const getRestaurantInfo = async (id: string): Promise<RestaurantInfo> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockRestaurantInfo);
    }, 500);
  });

export const updateRestaurantInfo = async (restaurantInfo: RestaurantInfo): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });

export const deleteRestaurantInfo = async (id: string): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });

export const resetPasswordRestaurantInfo = async (
  id: string,
  newPassword: Credential,
): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });
