import React from 'react';
import * as classes from './header.styles';
import { Typography } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';

interface HeaderProps {
  name: string;
  description?: string;
  telephone?: string;
}

export const HeaderComponent: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { name, description, telephone } = props;
  return (
    <div className={classes.header}>
      <Typography variant="h1" color={'primary'}>{name}</Typography>
      {!!description && <Typography variant="h2" color={'secondary'}><RestaurantIcon /> {description}</Typography>}
      {!!telephone && (
        <dl className={classes.telephone}>
          <dt>Teléfono de reservas:</dt>
          <dd aria-label={telephone.split('').join('.')}>{telephone}</dd>
        </dl>
      )}
    </div>
  );
};
