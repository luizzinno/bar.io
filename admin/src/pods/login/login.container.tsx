import React from 'react';

//Router
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

//Api
import { isValidLogin } from './api/login-api';

//Vm
import { Login } from './login.vm';


//Context
import { userContext, Role } from 'core/user';

//Component
import { LoginComponent } from './login.component';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';

export const LoginContainer: React.FunctionComponent = () => {
  const { setUser } = React.useContext(userContext);
  const history = useHistory();
  const [error, setError] = React.useState<string>(null);

  const loginSucceeded = (email: string, role: Role): void => {
    if (role !== Role.NONE) {
      setUser({
        email,
        role,
      });

      //User is superadmin
      if (role === Role.SUPERADMIN) {
        history.push(routes.barInfoList);
      } else {
        history.push(routes.dashboard);
      }
    } else {
      // Snackbar error
      setError('Invalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.email, login.password).then((result) => {
      loginSucceeded(login.email, result);
    });
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
