import { Product } from './product.model';

export interface MenuCategory {
  id: string;
  name: string;
  products: Product[];
}

export const createEmptyMenuCategory = (): MenuCategory => ({
  id: '',
  name: '',
  products: [],
});
