import React from "react";

interface Props {
  restauranteName: string;
}

export const RestaurantContainer: React.FC<Props> = (props) => {
  const { restauranteName: nombreRestaurante } = props;

  return <h1>Carta de {nombreRestaurante}</h1>;
};
