import { RestaurantInfo } from "./restaurant.vm";
import { restaurantMockData } from "./restaurant.mock";

// TODO: Manolo
export const getRestaurantMenu = async (): Promise<RestaurantInfo> => {
  return restaurantMockData;
};
