import React from 'react';

//Components
import { SelectionModuleComponent } from "./selection-module.component";
import { DashboardItemProps } from 'common/components';

//Material UI
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import { linkRoutes } from 'core/router';

interface Props {
  hasDrawer?: boolean;
}

export const SelectionModuleContainer: React.FunctionComponent<Props> = (props) => {
  const { hasDrawer } = props;
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Añadir restaurante',
        linkTo: linkRoutes.createRestaurant,
        icon: RestaurantIcon,
      },
      {
        title: 'Editar restaurante',
        linkTo: linkRoutes.editRestaurant('1'),
        icon: RestaurantMenuIcon,
      },
      {
        title: 'Añadir administrador',
        linkTo: linkRoutes.createAdministrator,
        icon: SupervisorAccountIcon,
      },
      {
        title: 'Editar administrador',
        linkTo: linkRoutes.editAdministrator('1'),
        icon: SupervisorAccountOutlinedIcon,
      },
    ],
    [],
  );

  return <SelectionModuleComponent items={items} hasDrawer={hasDrawer} />;
};