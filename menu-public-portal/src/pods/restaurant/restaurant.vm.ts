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

interface CategoryEntry {
  name: string;
  items: Items[];
}

export interface RestaurantInfo {
  name: string;
  heading1: string;
  heading2: string;
  menu: CategoryEntry[];
}

export const emptyRestaurantInfo: RestaurantInfo = {
  name: "",
  heading1: "",
  heading2: "",
  menu: [],
};
