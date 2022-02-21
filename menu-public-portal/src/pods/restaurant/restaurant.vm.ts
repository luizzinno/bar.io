import { ThemeName } from "core/theme";

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
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  menuDate: string;
  communitySourceUrl?: string;
  official: boolean;
  description: string;
  theme: ThemeName;
  menu: CategoryEntry[];
}

export const emptyRestaurantInfo = (): RestaurantInfo => ({
  name: "",
  urlName: "",
  phone: "",
  address: "",
  locationUrl: "",
  menuDate: "",
  communitySourceUrl: "",
  official: false,
  description: "",
  theme: "default",
  menu: [],
});