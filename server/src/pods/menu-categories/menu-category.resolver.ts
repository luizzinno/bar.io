import { GraphQLResolver } from 'common/models';
import { MenuCategory, MenuCategoryRepository, Product } from 'dals';

interface MenuCategoryResolver {
  Query: {
    getMenuCategories: GraphQLResolver<Array<MenuCategory>>;
    getMenuCategoryById: GraphQLResolver<MenuCategory, { id: string }>;
    getMenuCategoryByProductId: GraphQLResolver<MenuCategory, { id: string }>;
    getProductById: GraphQLResolver<Product, { id: string }>;
  };
  Mutation: {
    saveMenuCategory: GraphQLResolver<
      MenuCategory,
      { menuCategory: MenuCategory }
    >;
    saveProduct: GraphQLResolver<
      Product,
      { product: Product; categoryId?: string }
    >;
    saveProducts: GraphQLResolver<
      Array<Product>,
      { categoryId: string; products: Array<Product> }
    >;
    deleteMenuCategory: GraphQLResolver<Array<MenuCategory>, { id: string }>;
    deleteProduct: GraphQLResolver<Array<Product>, { id: string }>;
  };
}

export const menuCategoryResolver: MenuCategoryResolver = {
  Query: {
    getMenuCategories: async (
      parent,
      {},
      context
    ): Promise<Array<MenuCategory>> =>
      await MenuCategoryRepository.getMenuCategories(),
    getMenuCategoryById: async (
      parent,
      { id },
      context
    ): Promise<MenuCategory> =>
      await MenuCategoryRepository.getMenuCategoryById(id),
    getMenuCategoryByProductId: async (
      parent,
      { id },
      context
    ): Promise<MenuCategory> =>
      await MenuCategoryRepository.getMenuCategoryByProductId(id),
    getProductById: async (parent, { id }, context): Promise<Product> =>
      await MenuCategoryRepository.getProductById(id),
  },
  Mutation: {
    saveMenuCategory: async (
      parent,
      { menuCategory },
      context
    ): Promise<MenuCategory> =>
      await MenuCategoryRepository.saveMenuCategory(menuCategory),
    saveProduct: async (
      parent,
      { product, categoryId },
      context
    ): Promise<Product> =>
      await MenuCategoryRepository.saveProduct(product, categoryId),
    saveProducts: async (
      parent,
      { categoryId, products },
      context
    ): Promise<Array<Product>> =>
      await MenuCategoryRepository.saveProducts(categoryId, products),
    deleteMenuCategory: async (
      parent,
      { id },
      context
    ): Promise<Array<MenuCategory>> =>
      await MenuCategoryRepository.deleteMenuCategory(id),
    deleteProduct: async (parent, { id }, context): Promise<Array<Product>> =>
      await MenuCategoryRepository.deleteProduct(id),
  },
};
