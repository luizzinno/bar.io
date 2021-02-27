import React from 'react';
import { cx } from 'emotion';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//VM
import { DashboardItemProps } from './dashboard.vm';

//Component
import { ItemComponent, ClassesProps } from './components';

//CSS
import * as innerClasses from './dashboard.styles';

interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}

interface Props {
  items: DashboardItemProps[];
  classes?: ClassNameProps;
  dataTestId?: string;
  openDrawer?: boolean;
}

export const DashboardComponent: React.FC<Props> = (props) => {
  const { items, classes, dataTestId, openDrawer } = props;
  return (
    <List
      data-testid={dataTestId}
      component='ul'
      aria-label='menu options'
      className={cx(!openDrawer && innerClasses.root, openDrawer && innerClasses.rootDrawer)}>
      {items.map(
        (item) =>
          Boolean(item) && (
            <ListItem
              className={cx(
                !openDrawer && innerClasses.items,
                openDrawer && innerClasses.itemsDrawer,
              )}>
              <ItemComponent
                openDrawer={openDrawer}
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(!openDrawer && innerClasses.item, openDrawer && innerClasses.itemDrawer),
                }}
                item={item}
              />
            </ListItem>
          ),
      )}
    </List>
  );
};

DashboardComponent.defaultProps = {
  classes: {
    root: '',
    items: '',
    item: {
      root: '',
      icon: '',
      title: '',
    },
  },
};
