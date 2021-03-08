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
  hasDrawer?: boolean;
}

export const DashboardComponent: React.FC<Props> = (props) => {
  const { items, classes, dataTestId, hasDrawer } = props;
  return (
    <List
      data-testid={dataTestId}
      component='ul'
      aria-label='menu options'
      className={cx(!hasDrawer && innerClasses.root, hasDrawer && innerClasses.rootDrawer)}>
      {items.map(
        (item) =>
          Boolean(item) && (
            <ListItem
              className={cx(
                !hasDrawer && innerClasses.items,
                hasDrawer && innerClasses.itemsDrawer,
              )}>
              <ItemComponent
                hasDrawer={hasDrawer}
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(!hasDrawer && innerClasses.item, hasDrawer && innerClasses.itemDrawer),
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
