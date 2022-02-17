import { RestaurantTheme } from 'common-app/models';

export interface RationType {
  unit: string;
  price: number;
}

export interface PriceByRation {
  rationName: string;
  rationsTypes: RationType[];
}

export interface Item {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: PriceByRation;
  unit?: string;
}

export interface CategoryEntry {
  name: string;
  items: Item[];
}

export interface RestaurantInfo {
  name: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  urlName: string;
  theme: RestaurantTheme;
  menu: CategoryEntry[];
  menuDate: string;
  official: boolean;
}
