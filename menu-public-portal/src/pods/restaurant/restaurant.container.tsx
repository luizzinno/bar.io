import React from "react";
import { RestaurantComponent } from "./restaurant.component";

interface Props {
  restaurantName: string;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { restaurantName } = props;

  return <RestaurantComponent restaurantName={restaurantName} />;
};
