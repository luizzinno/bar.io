import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { userContext, Role } from 'core/user';

export const AuthRoute: React.FunctionComponent<RouteProps> = props => {
  const { user } = React.useContext(userContext);
  const history = useHistory();

  React.useEffect(() => {
    if(user.role === Role.NONE) {
      history.push('/');
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};