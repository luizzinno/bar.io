import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { getRestaurantMenu } from "./restaurant.repository";
import { RestaurantInfo, emptyRestaurantInfo } from "./restaurant.vm";

interface Props {
  restaurantName: string;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { restaurantName } = props;

  const [restaurantMenuInfo, setRestaurantMenuInfo] =
    React.useState<RestaurantInfo>(emptyRestaurantInfo);

  React.useEffect(() => {
    const isAllRight = (restaurantMenuInfo): boolean =>
      restaurantMenuInfo !== undefined &&
      restaurantMenuInfo !== null &&
      Object.keys(restaurantMenuInfo).length > 0;

    if (isAllRight(restaurantMenuInfo)) {
      getRestaurantMenu().then(setRestaurantMenuInfo);
    }
  }, []);

  return (
    <RestaurantComponent
      restaurantName={restaurantName}
      restaurantMenuInfo={restaurantMenuInfo}
    />
  );
};
