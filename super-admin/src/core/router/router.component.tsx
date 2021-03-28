import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import { switchRoutes } from './routes';
import {
  LoginScene,
  SelectionModuleScene,
  AdministratorListScene,
  AdministratorScene,
  RestaurantListScene,
  RestaurantScene
} from 'scenes/superAdmin';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
        <Route exact={true} path={switchRoutes.selectionModule} component={SelectionModuleScene} />
        <Route exact={true} path={switchRoutes.administratorList} component={AdministratorListScene} />
        <Route exact={true} path={switchRoutes.createAdministrator} component={AdministratorScene} />
        <Route exact={true} path={switchRoutes.editAdministrator} component={AdministratorScene} />
        <Route exact={true} path={switchRoutes.restaurantList} component={RestaurantListScene} />
        <Route exact={true} path={switchRoutes.createRestaurant} component={RestaurantScene} />
        <Route exact={true} path={switchRoutes.editRestaurant} component={RestaurantScene} />
      </Switch>
    </Router>
  );
};
