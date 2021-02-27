import React from 'react';
import { cx } from 'emotion';

//Router
import { Link } from 'react-router-dom';

//VM
import { DashboardItemProps } from '../dashboard.vm';

//Material ui
import Typography from '@material-ui/core/Typography';

//CSS
import * as innerClasses from './item.styles';

export interface ClassesProps {
  root?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
}

interface Props {
  item: DashboardItemProps;
  classes?: ClassesProps;
  dataTestId?: string;
  openDrawer?: boolean;
}

export const ItemComponent: React.FC<Props> = (props) => {
  const {
    item: { icon: Icon, title, linkTo, subtitle },
    classes,
    dataTestId,
    openDrawer
  } = props;
  return (
    <Link className={classes.root} to={linkTo} data-testid={dataTestId}>
      <Icon className={cx(!openDrawer && innerClasses.icon, openDrawer && innerClasses.iconDrawer)} />
      <Typography variant='h5' className={cx(!openDrawer && innerClasses.title, openDrawer && innerClasses.titleDrawer)}>
        {title}
      </Typography>
      <Typography variant='h6' className={cx(!openDrawer && innerClasses.subtitle, openDrawer && innerClasses.subtitleDrawer)}>
        {subtitle}
      </Typography>
    </Link>
  );
};

ItemComponent.defaultProps = {
  classes: {
    root: '',
    icon: '',
    title: '',
    subtitle: '',
  },
};
