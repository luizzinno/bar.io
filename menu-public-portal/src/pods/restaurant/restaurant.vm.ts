interface PriceByRation {
  rationName: string;
  price: number;
}

interface Items {
  name: string;
  price?: number;
  priceByRation: PriceByRation[];
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
