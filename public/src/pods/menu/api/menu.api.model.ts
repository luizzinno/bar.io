export interface Menu {
  restaurantInfo: RestaurantInfo;
  categories: MenuCategory[];
}

export interface RestaurantInfo {
  infoA: string;
  infoB?: string;
  infoC?: string;
}

export interface MenuCategory {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  description: string;
  portions: Portion[];
}

export interface Portion {
  name: string;
  price: number;
}
