export interface Menu {
  restaurantInfo: RestaurantInfo;
  categories: MenuCategory[];
}

export interface RestaurantInfo {
  name: string;
  description?: string;
  telephone?: string;
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
