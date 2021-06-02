import { MenuCategory, Product } from 'dals';

export interface MenuCategoryRepositoryContract {
  getMenuCategories: () => Promise<MenuCategory[]>;
  getMenuCategoryById: (id: string) => Promise<MenuCategory>;
  getMenuCategoryByProductId: (productId: string) => Promise<MenuCategory>;
  saveMenuCategory: (menuCategory: MenuCategory) => Promise<void>;
  saveMenuCategories: (menuCategories: MenuCategory[]) => Promise<void>;
  getProductById: (id: string) => Promise<Product>;
  saveProduct: (product: Product, categoryId?: string) => Promise<string>;
  saveProducts: (
    categoryId: string,
    products: Product[]
  ) => Promise<void>;
  deleteMenuCategory: (id: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  removeProductPortionFromProducts: (
    productPortionId: string
  ) => Promise<void>;
  removeProductPortionTypeFromProducts: (
    productPortionTypeId: string
  ) => Promise<void>;
}
