import * as React from "react";
import { RestaurantList } from "./restaurant-list.component";
import { RestaurantInfo } from "./restaurant-list.vm";

interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantListContainer: React.FC<Props> = (props) => {
  const { restaurantList } = props;
  return <RestaurantList restaurantList={restaurantList} />;
};

export { RestaurantListContainer };
