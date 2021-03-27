import React from 'react';
import { AppLayout } from 'layouts';
import { RestaurantContainer } from 'pods/restaurant';

export const RestaurantScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <RestaurantContainer />
      </AppLayout>
    </>
  );
};
