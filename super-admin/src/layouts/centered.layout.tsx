import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components/';
import * as classes from './centered.layout.styles';

export const CenteredLayout: React.FC = ({ children }) => {
  const { root } = classes;
  return (
    <>
      <HeaderComponent name='App administración Bar.io' hasDrawer={false} />
      <Grid container className={root}>
        {children}
      </Grid>
      <FooterComponent />
    </>
  );
};
