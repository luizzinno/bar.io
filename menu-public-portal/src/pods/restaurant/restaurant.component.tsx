import React from "react";
import * as classes from "./restaurant.styles";

interface Props {
  restaurantName: string;
}

export const RestaurantComponent: React.FC<Props> = (props) => {
  const { restaurantName } = props;

  return (
    <>
      <h1 className={classes.testh1}>Carta de {restaurantName}</h1>
    </>
  );
};
