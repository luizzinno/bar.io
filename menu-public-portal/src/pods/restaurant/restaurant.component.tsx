import React from "react";

interface Props {
  nombreRestaurante: string;
}

export const RestaurantComponent: React.FC<Props> = (props) => {
  const { nombreRestaurante } = props;

  return <h1>Carta de {nombreRestaurante}</h1>;
};
