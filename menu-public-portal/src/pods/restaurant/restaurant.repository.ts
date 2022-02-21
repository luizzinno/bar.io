import { RestaurantInfo } from "./restaurant.vm";
import { restaurantMockData } from "./restaurant.mock";

export const getRestaurantMenu = async (
  restaurantName: string
): Promise<RestaurantInfo> => {
  const restaurant = restaurantMockData.find(
    (restaurant) => restaurant.urlName === restaurantName
  );

  return await restaurant;
};
