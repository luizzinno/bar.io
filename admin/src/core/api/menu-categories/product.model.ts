export interface Product {
  id: string;
  name: string;
  description: string;
  visible: boolean;
  portionTypeId: string;
  portions: Portion[];
}

export interface Portion {
  id: string;
  price: number;
}
