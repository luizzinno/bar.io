import { RestaurantApi } from "./api.model";

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const response = await fetch(`http://localhost:3000/${restaurantName}.json`);
  return response.json();
};
