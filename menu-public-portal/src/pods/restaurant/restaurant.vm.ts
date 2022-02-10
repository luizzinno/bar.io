import { Theme } from "@mui/material";
import { defaultTheme } from "core/theme";

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

// this belongs to API
//export type ThemeName = "default" | "fish";

export interface RestaurantInfo {
  name: string;
  urlName: string;
  heading1: string;
  heading2: string;
  theme: Theme;
  menu: CategoryEntry[];
}

export const emptyRestaurantInfo = (): RestaurantInfo => ({
  name: "",
  urlName: "",
  theme: defaultTheme,
  heading1: "",
  heading2: "",
  menu: [],
});
