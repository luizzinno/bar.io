import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import { switchRoutes } from './routes';
import { LoginScene, AdministratorListScene } from 'scenes/superAdmin';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
        <Route exact={true} path={switchRoutes.administratorList} component={AdministratorListScene} />
      </Switch>
    </Router>
  );
};
