import { RestaurantApi } from "./api.model";

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const response = await fetch(`${process.env.PUBLIC_URL}/${restaurantName}.json`);
  return response.json();
};
