import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { RestaurantInfo} from "./restaurant.vm";
import { ThemeProvider } from "@mui/material/styles";
import { chooseTheme, } from "core/theme";

interface Props {
  menu: RestaurantInfo;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { menu } = props;

  // TODO: discuss whether we should chane theme change on APP
  // or keep it at restaurant level
  return (
    <ThemeProvider theme={chooseTheme(menu.theme)}>
      <RestaurantComponent
        restaurantMenuInfo={menu}
      />
    </ThemeProvider>
  );
};
