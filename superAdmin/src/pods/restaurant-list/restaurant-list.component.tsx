import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const RestaurantListComponent: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello Restaurant List Component</h1>
      <Link to={linkRoutes.createRestaurant}>Go to Create Restaurant</Link>
      <br/>
      <Link to={linkRoutes.editRestaurant('1')}>Go to Edit Restaurant</Link>
    </>
  )
}
