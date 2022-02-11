import * as restaurantApi from "./api/api.model";
import * as restaurantVm from "./restaurant.vm";
import { defaultTheme, fishTheme } from "core/theme";
import { Theme as SystemTheme } from "@mui/system";
import { Theme } from "@mui/material";

// TODO: move this to another place
// and add unit tests
export const chooseTheme = (themeName: restaurantVm.ThemeName): Theme => {
  switch (themeName) {
    case "fish":
      return fishTheme;
    default:
      return defaultTheme;
  }
};

// TODO: Not in use now since we are directly using mock viewModel JSON
// once we have a repo model we will apply this mock
/*
export const mapFromRestaurantApiToRestaurantVm = (
  restaurantApi: restaurantApi.RestaurantInfoGlobal
): restaurantVm.RestaurantInfo => ({
  ...restaurantApi,
  theme: chooseTheme(restaurantApi.),
});*/
