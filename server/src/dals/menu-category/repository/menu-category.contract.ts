import { MenuCategory, Product } from 'dals';

export interface MenuCategoryRepositoryContract {
  getMenuCategories: () => Promise<Array<MenuCategory>>;
  getMenuCategoryById: (id: string) => Promise<MenuCategory>;
  getMenuCategoryByProductId: (productId: string) => Promise<MenuCategory>;
  saveMenuCategory: (menuCategory: MenuCategory) => Promise<MenuCategory>;
  getProductById: (id: string) => Promise<Product>;
  saveProduct: (product: Product, categoryId?: string) => Promise<Product>;
  saveProducts: (
    categoryId: string,
    products: Array<Product>
  ) => Promise<Array<Product>>;
  deleteMenuCategory: (id: string) => Promise<Array<MenuCategory>>;
  deleteProduct: (id: string) => Promise<Array<Product>>;
  removeProductPortionFromProducts: (
    productPortionId: string
  ) => Promise<boolean>;
  removeProductPortionTypeFromProducts: (
    productPortionTypeId: string
  ) => Promise<boolean>;
}
