import React from 'react';

//Components
import { MenuComponent } from './menu.component';
import { DashboardItemProps } from 'common/components';

//Material UI
import InfoIcon from '@material-ui/icons/Info';
import FolderIcon from '@material-ui/icons/Folder';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { routes } from 'core/router';
import { QrCodeIcon } from './icons';

export const MenuContainer: React.FunctionComponent = () => {
  const [items, setItems] = React.useState<DashboardItemProps[]>([]);
  React.useEffect(() => {
    //User is superadmin
    if (false) {
      setItems(itemsSuperAdmin);
    } else {
      setItems(itemsAdmin);
    }
  }, []);

  const itemsAdmin: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Información del bar',
        linkTo: routes.barInfo,
        icon: InfoIcon,
      },
      {
        title: 'Categorías',
        linkTo: routes.categoriesList,
        icon: FolderIcon,
      },
      {
        title: 'Productos',
        linkTo: routes.productList,
        icon: RestaurantMenuIcon,
      },
      {
        title: 'Raciones',
        linkTo: routes.productPortionList,
        icon: LocalOfferIcon,
      },
      {
        title: 'Código QR',
        linkTo: routes.qrCode,
        icon: QrCodeIcon,
      },
    ],
    [],
  );
  const itemsSuperAdmin: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Información de los bares',
        linkTo: routes.barInfoList,
        icon: InfoIcon,
      },
      {
        title: 'Categorías',
        linkTo: routes.categoriesList,
        icon: FolderIcon,
      },
      {
        title: 'Productos',
        linkTo: routes.productList,
        icon: RestaurantMenuIcon,
      },
      {
        title: 'Raciones',
        linkTo: routes.productPortionList,
        icon: LocalOfferIcon,
      },
      {
        title: 'Código QR',
        linkTo: routes.qrCode,
        icon: QrCodeIcon,
      },
    ],
    [],
  );

  return <MenuComponent items={items} />;
};
