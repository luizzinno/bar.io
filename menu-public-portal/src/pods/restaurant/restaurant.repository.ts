import { RestaurantInfo } from "./restaurant.vm";
import { restaurantMockData } from "./restaurant.mock";

export const getRestaurantMenu = async (
  restaurantName : string
): Promise<RestaurantInfo> => {
  return await restaurantMockData;
};
