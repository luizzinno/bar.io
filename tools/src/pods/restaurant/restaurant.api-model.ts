import { RestaurantTheme } from "common-app/models";

export interface PriceByRation {
  rationName: string;
  price: number;
}

export interface Items {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: PriceByRation[];
  unit?: string;
}

export interface CategoryEntry {
  name: string;
  items: Items[];
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
