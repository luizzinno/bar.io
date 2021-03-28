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

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
        <Route exact={true} path={switchRoutes.dashboard} component={DashboardScene} />
        <Route exact={true} path={switchRoutes.barInfo} component={BarInfoScene} />
        <Route exact={true} path={switchRoutes.barInfoList} component={BarInfoListScene} />
        <Route exact={true} path={switchRoutes.categoriesList} component={CategoriesListScene} />
        <Route exact={true} path={switchRoutes.productList} component={ProductListScene} />
        <Route exact={true} path={switchRoutes.editProduct} component={EditProductScene} />
        <Route exact={true} path={switchRoutes.qrCode} component={QrCodeScene} />
        <Route
          exact={true}
          path={switchRoutes.productPortionTypes}
          component={ProductPortionTypesScene}
        />
        <Route exact={true} path={switchRoutes.editPortions} component={EditPortionsScene} />
      </Switch>
    </Router>
  );
};
