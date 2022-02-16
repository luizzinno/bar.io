import { ObjectId } from 'mongodb';

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

export type RestaurantTheme = 'fish' | 'meat';

interface CategoryDefinition {
  _id: ObjectId;
  name: string;
  order: number;
}

interface RationDefinition {
  _id: ObjectId;
  name: string;
  types: string[];
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
}
