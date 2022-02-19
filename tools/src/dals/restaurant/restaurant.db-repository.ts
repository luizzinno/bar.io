import { getRestaurantContext } from './restaurant.context';
import * as model from './restaurant.model';

export const restaurantDbRepository = {
  getRestaurantByUrlName: async (
    urlName: string
  ): Promise<model.Restaurant> => {
    try {
      return await getRestaurantContext().findOne({ urlName: urlName });
    } catch (error) {
      throw error;
    }
  },
  saveRestaurant: async (restaurant: model.Restaurant) => {
    try {
      await getRestaurantContext().insertOne(restaurant);
    } catch (error) {
      throw error;
    }
  },
};
