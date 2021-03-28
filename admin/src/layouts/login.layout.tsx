import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as classes from './login.layout.styles';

export const LoginLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      justify='center'
      alignItems='center'
      className={classes.root}>
      {children}
    </Grid>
  );
};
