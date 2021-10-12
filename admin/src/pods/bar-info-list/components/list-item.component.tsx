import React from 'react';

//Router
import { Link } from 'react-router-dom';

//VM
import { BarInfoListItemProps } from '../bar-info-list.vm';

//Material UI
import Typography from '@material-ui/core/Typography';

//CSS
import * as classes from './list-item.styles';

export const ListItemComponent: React.FC<BarInfoListItemProps> = (props) => {
  const {
    title,
    info2,
    info3,
    linkTo,
  } = props;

  return (
    <Link to={linkTo} className={classes.item}>
      <Typography
        variant='h5'
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        variant='h6'
        className={classes.info2}
      >
        {info2}
      </Typography>
      <Typography
        variant='h6'
        className={classes.info3}
      >
        {info3}
      </Typography>
    </Link>
  );
}