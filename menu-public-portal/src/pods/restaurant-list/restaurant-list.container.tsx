import * as React from "react";
import { RestaurantList } from "./restaurant-list.component";
import { RestaurantInfo } from "./restaurant-list.vm";

interface Props {
  restaurantCollection: RestaurantInfo[];
}

const RestaurantListContainer: React.FC<Props> = (props) => {
  const { restaurantCollection } = props;
  return <RestaurantList restaurantList={restaurantCollection} />;
};

export { RestaurantListContainer };
