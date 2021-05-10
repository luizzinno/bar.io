import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components';
import * as classes from './app.layout.styles';
import { userContext, Role } from 'core/user';

export const AppLayout: React.FC = ({ children }) => {
  const { user } = React.useContext(userContext);

  return (
    <div className={classes.root}>
      {user.role === Role.SUPERADMIN ? (
        <HeaderComponent name='Bar.io' hasDrawer={true} hasReturnToList={true}/>
      ) : (
        <HeaderComponent name='Mesón Paco' hasDrawer={true} hasReturnToList={false}/>
      )}
      <Grid container className={classes.content}>
        {children}
      </Grid>
      <FooterComponent />
    </div>
  );
};
