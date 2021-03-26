export interface MenuCategory {
  id: string;
  name: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  visible: boolean;
  description: string;
  portionTypeId: string;
  portions: Portion[];
}

export interface Portion {
  id: string;
  price: number;
}
