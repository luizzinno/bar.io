import React from 'react';
import { DashboardComponent, DashboardItemProps } from 'common/components';

interface Props {
  items: DashboardItemProps[];
  openDrawer?: boolean;
}

export const MenuComponent: React.FunctionComponent<Props> = (props) => {
  const { items, openDrawer } = props;
  return <DashboardComponent items={items} openDrawer={openDrawer} />;
};
