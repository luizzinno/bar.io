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

export interface RestaurantInfoGlobal {
  name: string;
  urlName: string;
  heading1: string;
  heading2: string;
  menu: CategoryEntry[];
}