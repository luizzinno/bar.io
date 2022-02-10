import * as restaurantApi from "./api/api.model";
import * as restaurantVm from "./restaurant.vm";
import { defaultTheme, fishTheme } from "core/theme";
import { Theme as SystemTheme } from "@mui/system";
import { Theme } from "@mui/material";

const chooseTheme = (themeName: restaurantVm.ThemeName): Theme => {
  switch (themeName) {
    case "fish":
      return fishTheme;
    default:
      return defaultTheme;
  }
};

/*
export const mapFromRestaurantApiToRestaurantVm = (
  restaurantApi: restaurantApi.RestaurantInfoGlobal
): restaurantVm.RestaurantInfo => ({
  ...restaurantApi,
  theme: chooseTheme(restaurantApi.),
});*/
