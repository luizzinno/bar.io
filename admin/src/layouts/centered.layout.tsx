import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components/';
import * as classes from './centered.layout.styles';
import { userContext, Role } from 'core/user';

export const CenteredLayout: React.FC = (props) => {
  const { children } = props;
  const { user } = React.useContext(userContext);

  return (
    <>
      {user.role === Role.SUPERADMIN ? (
        <HeaderComponent name='Bar.io' hasDrawer={false} hasReturnToList={true} />
      ) : (
        <HeaderComponent name='Mesón Paco' hasDrawer={false} hasReturnToList={false} />
      )}
      
      <Grid container className={classes.root}>
        {children}
      </Grid>
      <FooterComponent />
    </>
  );
};
