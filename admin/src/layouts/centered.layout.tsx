import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent, FooterComponent } from 'common-app/components/';
import * as classes from './centered.layout.styles';

export const CenteredLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent name='Mesón Paco' hasDrawer={false} />
      <Grid container className={classes.root}>
        {children}
      </Grid>
      <FooterComponent />
    </>
  );
};
