
import { defaultTheme, ThemeName } from "core/theme";

export interface PriceByRation {
  rationName: string;
  price: number;
}

export interface Items {
  name: string;
  description?: string;
  price?: number;
  priceByRation?: PriceByRation[];
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
}

export const emptyRestaurantInfo = (): RestaurantInfo => ({
  name: "",
  urlName: "",
  theme: "default",
  heading1: "",
  heading2: "",
  menu: [],
});
