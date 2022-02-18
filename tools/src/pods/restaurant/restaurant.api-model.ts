import { RestaurantTheme } from 'common-app/models';
import { ObjectId } from 'mongodb';

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
  _id: ObjectId;
  name: string;
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  menuDate: Date;
  communitySourceUrl: string;
  official: boolean;
  description: string;
  theme: RestaurantTheme;
  menu: CategoryEntry[];
}
