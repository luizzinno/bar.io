import React from 'react';
import { DashboardComponent, DashboardItemProps } from 'common/components';

interface Props {
  items: DashboardItemProps[];
  hasDrawer?: boolean;
}

export const MenuComponent: React.FunctionComponent<Props> = (props) => {
  const { items, hasDrawer } = props;
  return <DashboardComponent items={items} hasDrawer={hasDrawer} />;
};
