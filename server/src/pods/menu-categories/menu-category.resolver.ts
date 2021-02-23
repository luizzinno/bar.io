import { GraphQLResolver } from 'common/models';
import { menuCategoryRepository } from 'dals';
import {
  mapFromMenuCategoryApiModelToModel,
  mapFromMenuCategoryModelToApiModel,
  mapFromProductApiModelToModel,
  mapFromProductModelToApiModel,
} from './menu-category.mapper';
import { MenuCategory, Product } from './menu-category.model';

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
      (await menuCategoryRepository.getMenuCategories())?.map((mc) =>
        mapFromMenuCategoryModelToApiModel(mc)
      ) ?? [],
    getMenuCategoryById: async (
      parent,
      { id },
      context
    ): Promise<MenuCategory> =>
      mapFromMenuCategoryModelToApiModel(
        await menuCategoryRepository.getMenuCategoryById(id)
      ),
    getMenuCategoryByProductId: async (
      parent,
      { id },
      context
    ): Promise<MenuCategory> =>
      mapFromMenuCategoryModelToApiModel(
        await menuCategoryRepository.getMenuCategoryByProductId(id)
      ),
    getProductById: async (parent, { id }, context): Promise<Product> =>
      mapFromProductModelToApiModel(
        await menuCategoryRepository.getProductById(id)
      ),
  },
  Mutation: {
    saveMenuCategory: async (
      parent,
      { menuCategory },
      context
    ): Promise<MenuCategory> =>
      mapFromMenuCategoryModelToApiModel(
        await menuCategoryRepository.saveMenuCategory(
          mapFromMenuCategoryApiModelToModel(menuCategory)
        )
      ),
    saveProduct: async (
      parent,
      { product, categoryId },
      context
    ): Promise<Product> =>
      mapFromProductModelToApiModel(
        await menuCategoryRepository.saveProduct(
          mapFromProductApiModelToModel(product),
          categoryId
        )
      ),
    saveProducts: async (
      parent,
      { categoryId, products },
      context
    ): Promise<Array<Product>> =>
      (
        await menuCategoryRepository.saveProducts(
          categoryId,
          products.map((p) => mapFromProductApiModelToModel(p))
        )
      )?.map((p) => mapFromProductModelToApiModel(p)) ?? [],
    deleteMenuCategory: async (
      parent,
      { id },
      context
    ): Promise<Array<MenuCategory>> =>
      (await menuCategoryRepository.deleteMenuCategory(id))?.map((mc) =>
        mapFromMenuCategoryModelToApiModel(mc)
      ) ?? [],
    deleteProduct: async (parent, { id }, context): Promise<Array<Product>> =>
      (await menuCategoryRepository.deleteProduct(id))?.map((p) =>
        mapFromProductModelToApiModel(p)
      ) ?? [],
  },
};
