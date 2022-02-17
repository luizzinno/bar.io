import { ObjectId } from 'mongodb';
import { RestaurantTheme } from 'common-app/models';

export interface RationType {
  unit: string;
  price: number;
}
export interface SubItemPrice {
  rationName: string;
  rationsTypes: RationType[];
}

export interface Item {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: SubItemPrice;
  unit?: string;
}

export interface ItemsByCategory {
  categoryName: string;
  items: Item[];
}

export interface RationDefinition {
  name: string;
  units: string[];
}

export interface Restaurant {
  _id: ObjectId;
  name: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  urlName: string;
  theme: RestaurantTheme;
  rationsDefinitions: RationDefinition[];
  menu: ItemsByCategory[];
  menuDate: string;
  official: boolean;
}
