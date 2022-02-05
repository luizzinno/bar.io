import React from "react";
import { RestaurantComponent } from "./restaurant.component";
import { mapFromRestaurantApiToRestaurantVm } from "./restaurant.mapper";
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
      setRestaurantMenuInfo(
        mapFromRestaurantApiToRestaurantVm(restaurantMenuInfo)
      )
    );
  }, []);

  return (
    <RestaurantComponent
      restaurantName={restaurantName}
      restaurantMenuInfo={restaurantMenuInfo}
    />
  );
};
