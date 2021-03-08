import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.root}>
      <HeaderComponent name='Mesón Paco' hasDrawer={true}/>
      <Grid container className={classes.content}>
        {children}
      </Grid>
      <FooterComponent />
    </div>
  );
};
