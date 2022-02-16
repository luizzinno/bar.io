import { ObjectId } from 'mongodb';
import { RestaurantTheme } from 'common-app/models';

export interface SubItemPrice {
  _id: ObjectId;
  rationTypedId: ObjectId;
  rationName: string;
  price: number;
}

export interface Items {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: SubItemPrice[];
  unit?: string;
}

export interface ItemsByCategory {
  _id: ObjectId;
  name: string;
  items: Items[];
}

export interface CategoryDefinition {
  _id: ObjectId;
  name: string;
  order: number;
}

export interface RationDefinition {
  _id: ObjectId;
  name: string;
  types: string[]; // TODO: Comprobar de donde sacar info
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
  categoriesDefinitions: CategoryDefinition[];
  rationsDefinitions: RationDefinition[];
  menu: ItemsByCategory[];
  menuDate: Date;
  official: boolean;
}
