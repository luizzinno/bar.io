import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { RestaurantInfo, emptyRestaurantInfo } from "./restaurant.vm";
import { ThemeProvider } from "@mui/material/styles";
import { chooseTheme } from "core/theme";

interface Props {
  restaurantName: string;
  menu: RestaurantInfo;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { restaurantName, menu } = props;

  // TODO: discuss whether we should chane theme change on APP
  // or keep it at restaurant level
  return (
    <ThemeProvider theme={chooseTheme(menu.theme)}>
      <RestaurantComponent
        restaurantName={restaurantName}
        restaurantMenuInfo={menu}
      />
    </ThemeProvider>
  );
};
