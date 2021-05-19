import React from 'react';
import * as classes from './header.styles';
import { Typography } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';

interface HeaderProps {
  infoA: string;
  infoB?: string;
  infoC?: string;
}

export const HeaderComponent: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { infoA, infoB, infoC } = props;
  return (
    <div className={classes.header}>
      <Typography variant='h1' color={'primary'}>
        {infoA}
      </Typography>
      {infoB && (
        <Typography variant='h2' color={'secondary'}>
          <RestaurantIcon /> {infoB}
        </Typography>
      )}
      {infoC && (
        <dl className={classes.telephone}>
          <dd>{infoC}</dd>
        </dl>
      )}
    </div>
  );
};
