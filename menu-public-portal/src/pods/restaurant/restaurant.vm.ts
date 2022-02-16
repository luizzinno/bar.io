import { ThemeName } from "core/theme";

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
  urlName: string;
  phone: string;
  address: string;
  locationUrl: string;
  description: string;
  theme: ThemeName;
  menu: CategoryEntry[];
  menuDate: string;
  official: boolean;
}

export const emptyRestaurantInfo = (): RestaurantInfo => ({
  name: "",
  urlName: "",
  theme: "default",
  phone: "",
  address: "",
  locationUrl: "",
  description: "",
  menu: [],
  menuDate: new Date("2022-02-14").toISOString(),
  official: false,
});
