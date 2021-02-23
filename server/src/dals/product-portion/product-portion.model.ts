export interface ProductPortionType {
  _id: any;
  name: string;
  portions: Array<ProductPortion>;
}

export interface ProductPortion {
  _id: any;
  name: string;
}
