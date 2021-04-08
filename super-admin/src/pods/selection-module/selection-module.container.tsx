import React from 'react';

//Components
import { SelectionModuleComponent } from "./selection-module.component";
import { DashboardItemProps } from 'common/components';

//Material UI
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { linkRoutes } from 'core/router';

interface Props {
  hasDrawer?: boolean;
}

export const SelectionModuleContainer: React.FunctionComponent<Props> = (props) => {
  const { hasDrawer } = props;
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Restaurantes',
        linkTo: linkRoutes.restaurantList,
        icon: RestaurantIcon,
      },
      {
        title: 'Gestionar administradores',
        linkTo: linkRoutes.administratorList,
        icon: SupervisorAccountIcon,
      },
    ],
    [],
  );

  return <SelectionModuleComponent items={items} hasDrawer={hasDrawer} />;
};