import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { getRestaurantMenu } from "./restaurant.repository";
import { RestaurantInfo, emptyRestaurantInfo } from "./restaurant.vm";

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
      setRestaurantMenuInfo(restaurantMenuInfo[0])
    );
  }, []);

  return (
    <RestaurantComponent
      restaurantName={restaurantName}
      restaurantMenuInfo={restaurantMenuInfo}
    />
  );
};
