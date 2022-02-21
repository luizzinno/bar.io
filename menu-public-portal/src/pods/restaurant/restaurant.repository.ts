import { RestaurantInfo } from "./restaurant.vm";
import { getRestaurantByName } from "./api/restaurant.api";
import { mapFromRestaurantApiToRestaurantVm } from "./restaurant.mapper";

export const getRestaurantMenu = async (
  restaurantName: string
): Promise<RestaurantInfo> => {
  const restaurant = await getRestaurantByName(mapFromRestaurantApiToRestaurantVm(restaurantName));

  return restaurant;
};
