import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  const { root, content } = classes;
  return (
    <div className={root}>
      <HeaderComponent name='App administración Bar.io' hasDrawer={true} />
      <Grid container className={content}>
        {children}
      </Grid>
      <FooterComponent />
    </div>
  );
};
