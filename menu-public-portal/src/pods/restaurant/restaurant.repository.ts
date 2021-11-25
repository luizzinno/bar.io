import { RestaurantInfo } from "./restaurant.vm";
import { restaurantMockData } from "./restaurant.mock";

export const getRestaurantMenu = async (
  restaurantName
): Promise<RestaurantInfo[]> => {
  return await restaurantMockData.filter(
    (restaurant) => restaurant.urlName === restaurantName
  );
};
