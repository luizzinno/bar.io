import React from 'react';
import * as classes from './header.styles';
import { Typography } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';

interface HeaderProps {
  line1: string;
  line2?: string;
  line3?: string;
}

export const HeaderComponent: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { line1, line2, line3 } = props;
  return (
    <div className={classes.header}>
      <Typography variant='h1' color={'primary'}>
        {line1}
      </Typography>
      {line2 && (
        <Typography variant='h2' color={'secondary'}>
          <RestaurantIcon /> {line2}
        </Typography>
      )}
      {line3 && (
        <dl className={classes.telephone}>
          <dd>{line3}</dd>
        </dl>
      )}
    </div>
  );
};
