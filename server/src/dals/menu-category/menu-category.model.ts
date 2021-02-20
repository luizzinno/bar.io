export interface MenuCategory {
  _id: any;
  name: string;
  products: Array<Product>;
}

export interface Product {
  _id: any;
  name: string;
  visible: boolean;
  description: string;
  portionTypeId: string;
  portions: Array<Portion>;
}

export interface Portion {
  _id: any;
  price: number;
}
