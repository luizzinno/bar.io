export interface Product {
  id: number;
  name: string;
  description: string;
  visible: boolean;
  portionTypeId: number;
  portions: Array<Portion>;
}

export interface Portion {
  id: number;
  price: number;
}
