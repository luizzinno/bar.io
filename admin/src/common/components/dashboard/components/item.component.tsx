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
  hasDrawer?: boolean;
}

export const ItemComponent: React.FC<Props> = (props) => {
  const {
    item: { icon: Icon, title, linkTo, subtitle },
    classes,
    dataTestId,
    hasDrawer,
  } = props;
  return (
    <Link className={classes.root} to={linkTo} data-testid={dataTestId}>
      <Icon
        className={cx(
          !hasDrawer && innerClasses.icon,
          hasDrawer && innerClasses.iconDrawer,
          classes.icon,
        )}
      />
      <Typography
        variant='h5'
        className={cx(
          !hasDrawer && innerClasses.title,
          hasDrawer && innerClasses.titleDrawer,
          classes.title,
        )}>
        {title}
      </Typography>
      <Typography
        variant='h6'
        className={cx(
          !hasDrawer && innerClasses.subtitle,
          hasDrawer && innerClasses.subtitleDrawer,
          classes.subtitle,
        )}>
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
