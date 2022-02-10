import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { getRestaurantMenu } from "./restaurant.repository";
import { RestaurantInfo, emptyRestaurantInfo } from "./restaurant.vm";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "core/theme";

interface Props {
  restaurantName: string;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { restaurantName } = props;
  const restaurantNameWithOutBar = restaurantName.substring(1);

  const [restaurantMenuInfo, setRestaurantMenuInfo] =
    React.useState<RestaurantInfo>(emptyRestaurantInfo);

  React.useEffect(() => {
    getRestaurantMenu(restaurantNameWithOutBar).then((restaurantMenuInfo) =>
      // Right now working just with VM onmock
      // on next step we will start working with API => Mapper => VM
      setRestaurantMenuInfo(restaurantMenuInfo)
    );
  }, []);

  // TODO: discuss whether we should chane theme change on APP
  // or keep it at restaurant level
  return (
    <ThemeProvider theme={restaurantMenuInfo.theme}>
      <RestaurantComponent
        restaurantName={restaurantName}
        restaurantMenuInfo={restaurantMenuInfo}
      />
    </ThemeProvider>
  );
};
