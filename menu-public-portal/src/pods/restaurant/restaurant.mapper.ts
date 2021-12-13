import * as restaurantApi from "./api/api.model";
import * as restaurantVm from "./restaurant.vm";

export const mapFromRestaurantApiToRestaurantVm = (
  restaurantApi: restaurantApi.RestaurantInfoGlobal
): restaurantVm.RestaurantInfo => ({
  ...restaurantApi,
});
