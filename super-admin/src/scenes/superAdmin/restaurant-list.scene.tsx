import React from 'react';
import { AppLayout } from 'layouts';
import { RestaurantListContainer } from 'pods/restaurant-list';

export const RestaurantListScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <RestaurantListContainer />
      </AppLayout>
    </>
  );
};
