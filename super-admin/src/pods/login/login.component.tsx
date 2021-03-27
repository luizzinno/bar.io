import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const LoginComponent: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello Login Component</h1>
      <Link to={linkRoutes.selectionModule}>Go to selection module</Link>
    </>
  )
}
