import { getRestaurantContext } from './restaurant.context';
import * as model from './restaurant.model';

export const restaurantDbRepository = {
  saveRestaurant: async (restaurant: model.Restaurant) => {
    try {
      await getRestaurantContext().insertOne(restaurant);
    } catch (error) {
      throw error;
    }
  },
};
