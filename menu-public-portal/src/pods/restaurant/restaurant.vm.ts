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
  heading1: string;
  heading2: string;
  theme: ThemeName;
  menu: CategoryEntry[];
  menuDate: string;
  official: boolean;
}

export const emptyRestaurantInfo = (): RestaurantInfo => ({
  name: "",
  urlName: "",
  theme: "default",
  heading1: "",
  heading2: "",
  menu: [],
  menuDate: new Date("2022-02-14").toDateString(),
  official: false,
});
