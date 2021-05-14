import React from 'react';
import { AppLayout } from 'layouts';
import { EditRestaurantContainer } from 'pods/edit-restaurant';

export const EditRestaurantScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <EditRestaurantContainer />
      </AppLayout>
    </>
  );
};
