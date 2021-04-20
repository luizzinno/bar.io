import React from 'react';
import { EditRestaurantComponent } from './edit-restaurant.component';

import { useParams } from 'react-router-dom';

//Api
import * as api from './api';
import { createEmptyRestaurantInfo, RestaurantInfo } from './restaurant-info.vm';

interface Params {
  id: string;
}

export const EditRestaurantContainer: React.FunctionComponent = () => {
  const { id } = useParams<Params>();

  const [restaurantInfo, setRestaurantInfo] = React.useState<RestaurantInfo>(
    createEmptyRestaurantInfo(),
  );

  React.useEffect(() => {
    onLoadRestaurantInfo(id);
  }, []);

  const onLoadRestaurantInfo = async (id: string) => {
    api
      .getRestaurantInfo(id)
      .then((result) => {
        //Mock....
        setRestaurantInfo(result);
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load restaurant info');
      });
  };

  const handleEdit = (restaurantInfo: RestaurantInfo) => {
    api
      .updateRestaurantInfo(restaurantInfo)
      .then((result) => {
        // Snackbar error
        alert('Updated Restaurant info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to update restaurant info');
      });
  };

  const handleDelete = (id: string) => {
    api
      .deleteRestaurantInfo(id)
      .then((result) => {
        // Snackbar error
        alert('Delete Restaurant info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to delete restaurant info');
      });
  };

  return (
    <EditRestaurantComponent
      restaurantsInfo={restaurantInfo}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
