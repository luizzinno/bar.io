import React from 'react';
import { useHistory } from 'react-router-dom';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant, createEmpyRestaurant } from './restaurant.vm';
import * as api from './api';
import { linkRoutes, switchRoutes } from 'core/router';

//Cabecera de la tabla
const headers = ['Nombre', 'Email', 'Movil', 'Actions'];

export const RestaurantListContainer: React.FunctionComponent = () => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>(createEmpyRestaurant());
  const history = useHistory();

  React.useEffect(() => {
    onLoadRestaurants();
  }, []);

  const handleCreate = () => {
    history.push(switchRoutes.createRestaurant);
  }

  const handleEdit = (row: Restaurant) => {
    history.push(linkRoutes.editRestaurant(row.id));
  };

  const handleDelete = (row: Restaurant) => {
    api
      .deleteRestaurant(row)
      .then((result) => {
        //Mock....
        if (result) {
          alert('Borrado');
          onLoadRestaurants();
        }
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load restaurants');
      });
  };

  //Controlar la lista de miembros devuelta de la busqueda
  const onLoadRestaurants = async () => {
    api
      .getRestaurants()
      .then((result) => {
        //Mock....
        setRestaurants([...result]);
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load restaurants');
      });
  };

  return (
    <RestaurantListComponent
      headers={headers}
      restaurants={restaurants}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
