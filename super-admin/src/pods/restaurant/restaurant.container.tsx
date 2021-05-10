import React from 'react';
import { RestaurantComponent } from './restaurant.component';

import { useParams } from 'react-router-dom';

//Api
import * as api from './api';
import { createEmptyRestaurantInfo, RestaurantInfo } from './restaurant-info.vm';
import { Credential } from './components/reset-password/credential.vm';

interface Params {
  id: string;
}

export const RestaurantContainer: React.FunctionComponent = () => {
  const { id } = useParams<Params>();

  const [restaurantInfo, setRestaurantInfo] = React.useState<RestaurantInfo>(
    createEmptyRestaurantInfo(),
  );

  React.useEffect(() => {
    if (id) {
      onLoadRestaurantInfo(id);
    }
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

  const handleSave = (restaurantInfo: RestaurantInfo) => {
    if (id) {
      handleEdit(restaurantInfo);
    }
    else {
      handleCreate(restaurantInfo);
    }
  };

  const handleCreate = (restaurantInfo: RestaurantInfo) => {
    api
      .createRestaurantInfo(restaurantInfo)
      .then((result) => {
        // Snackbar error
        alert('Added Restaurant info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to create restaurant info');
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

  const handleReset = (id: string, password: Credential) => {
    api
      .resetPasswordRestaurantInfo(id, password)
      .then((result) => {
        // Snackbar error
        alert('Reset Password Restaurant info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to reset password restaurant info');
      });
  };

  return (
    <RestaurantComponent
      restaurantsInfo={restaurantInfo}
      onSave={handleSave}
      onDelete={handleDelete}
      onResetPassword={handleReset}
    />
  );
};
