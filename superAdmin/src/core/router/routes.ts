import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  root: string;
  login: string;
  selectionModule: string
  administratorList: string;
  restaurantList: string;
  createAdministrator: string;
  editAdministrator: string
  createRestaurant: string;
  editRestaurant: string;
}

export const baseRoutes: BaseRoutes = {
  root: '/',
  login: '/login',
  selectionModule: '/selectionModul',
  administratorList: '/administrator-list',
  restaurantList: '/restaurant-list',
  createAdministrator: '/create-administrator',
  editAdministrator: '/edit-administrator/:id',
  createRestaurant: '/create-restaurant',
  editRestaurant: '/edit-restaurant/:id',
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes
};

interface LinkRoutes extends Omit<BaseRoutes, | 'editAdministrator' | 'editRestaurant'> {
  editAdministrator: (id: string) => string;
  editRestaurant: (id: string) => string;
};

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
  editAdministrator: (id) => generatePath(baseRoutes.editAdministrator, { id }),
  editRestaurant: (id) => generatePath(baseRoutes.editRestaurant, { id }),
}
