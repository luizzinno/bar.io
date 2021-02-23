export interface MenuCategory {
    id: any;
    name: string;
    products: Array<Product>;
  }
  
  export interface Product {
    id: any;
    name: string;
    visible: boolean;
    description: string;
    portionTypeId: string;
    portions: Array<Portion>;
  }
  
  export interface Portion {
    id: any;
    price: number;
  }
  