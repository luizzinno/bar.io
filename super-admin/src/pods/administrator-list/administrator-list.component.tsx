import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const AdministratorListComponent: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello Administrator List Component</h1>
      <Link to={linkRoutes.createAdministrator}>Go to Create Administrator</Link>
       <br/>
      <Link to={linkRoutes.editAdministrator('1')}>Go to Edit Administrator</Link>
    </>
  )
}
