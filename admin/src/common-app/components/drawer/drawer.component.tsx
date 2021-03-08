import React from 'react';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { cx } from 'emotion';
import * as classes from './drawer.styles';

interface Props extends DrawerProps {
  open: boolean;
  close: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  window?: () => Window;
}

export const DrawerComponent: React.FunctionComponent<Props> = ({
  children,
  open,
  close,
  window,
  ...otherProps
}) => {
  const theme = useTheme();
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={close}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={close}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          {children}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          open={open}
          className={cx(classes.drawer)}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
          {...otherProps}>
          <div className={classes.drawerHeader}>
          </div>
          <Divider />
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
};
