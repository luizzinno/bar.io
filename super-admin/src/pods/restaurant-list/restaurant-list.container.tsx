import React from 'react';
import { RestaurantListComponent } from './restaurant-list.component';

//Cabecera de la tabla
const headers = ['Nombre', 'Email', 'Movil', 'Actions'];

export const RestaurantListContainer: React.FunctionComponent = () => {
  return <RestaurantListComponent headers={headers} />;
};
