export interface ProductPortionType {
  _id: string;
  name: string;
  portions: ProductPortion[];
}

export interface ProductPortion {
  _id: string;
  name: string;
}
