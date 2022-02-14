import * as React from "react";
import { RestaurantList } from "./restaurant-list.component";
import { getRestaurantList } from "./restaurant-list.repository";
import { RestaurantInfo } from "./restaurant-list.vm";

const RestaurantListContainer: React.FC = () => {
  const [restaurantList, setRestaurantList] = React.useState<RestaurantInfo[]>(
    []
  );

  React.useEffect(() => {
    getRestaurantList().then(setRestaurantList);
  }, []);

  return <RestaurantList restaurantList={restaurantList} />;
};

export { RestaurantListContainer };
