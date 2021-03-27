import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const SelectionModule: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello Selection Module</h1>
      <Link to={linkRoutes.administratorList}>Go to Administrator list</Link>
       <br/>
      <Link to={linkRoutes.restaurantList}>Go to Restaurant list</Link>
    </>
  )
}
