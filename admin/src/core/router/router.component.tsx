import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import { switchRoutes } from './routes';
import {
  BarInfoScene,
  BarInfoListScene,
  CategoriesListScene,
  DashboardScene,
  EditProductScene,
  LoginScene,
  ProductListScene,
  ProductPortionTypesScene,
  EditPortionsScene,
  QrCodeScene,
} from 'scenes/admin';
import { AuthRoute } from './authroute';
import { SuperAdminRoute } from './superadminroute';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
        <AuthRoute exact={true} path={switchRoutes.dashboard} component={DashboardScene} />
        <AuthRoute exact={true} path={switchRoutes.barInfo} component={BarInfoScene} />
        <SuperAdminRoute exact={true} path={switchRoutes.barInfoList} component={BarInfoListScene} />
        <AuthRoute exact={true} path={switchRoutes.categoriesList} component={CategoriesListScene} />
        <AuthRoute exact={true} path={switchRoutes.productList} component={ProductListScene} />
        <AuthRoute exact={true} path={switchRoutes.editProduct} component={EditProductScene} />
        <AuthRoute exact={true} path={switchRoutes.qrCode} component={QrCodeScene} />
        <AuthRoute
          exact={true}
          path={switchRoutes.productPortionTypes}
          component={ProductPortionTypesScene}
        />
        <AuthRoute exact={true} path={switchRoutes.editPortions} component={EditPortionsScene} />
      </Switch>
    </Router>
  );
};
