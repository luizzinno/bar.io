import { GraphQLResolver } from 'common/models';
import {
  ProductPortionType,
  ProductPortionTypeRepository,
  ProductPortion,
  MenuCategoryRepository,
} from 'dals';

interface ProductPortionTypeResolver {
  Query: {
    getProductPortionTypes: GraphQLResolver<Array<ProductPortionType>>;
    getProductPortionTypeById: GraphQLResolver<
      ProductPortionType,
      { id: string }
    >;
  };
  Mutation: {
    saveProductPortionType: GraphQLResolver<
      ProductPortionType,
      { productPortionType: ProductPortionType }
    >;
    saveProductPortion: GraphQLResolver<
      ProductPortion,
      { productPortion: ProductPortion; productPortionTypeId?: string }
    >;
    deleteProductPortionType: GraphQLResolver<
      Array<ProductPortionType>,
      { id: string }
    >;
    deleteProductPortion: GraphQLResolver<
      Array<ProductPortion>,
      { id: string }
    >;
  };
}

export const productPortionTypeResolver: ProductPortionTypeResolver = {
  Query: {
    getProductPortionTypes: async (
      parent,
      {},
      context
    ): Promise<Array<ProductPortionType>> =>
      await ProductPortionTypeRepository.getProductPortionTypes(),

    getProductPortionTypeById: async (
      parent,
      { id },
      context
    ): Promise<ProductPortionType> =>
      await ProductPortionTypeRepository.getProductPortionTypeById(id),
  },
  Mutation: {
    saveProductPortionType: async (
      parent,
      { productPortionType },
      context
    ): Promise<ProductPortionType> =>
      await ProductPortionTypeRepository.saveProductPortionType(
        productPortionType
      ),
    saveProductPortion: async (
      parent,
      { productPortion, productPortionTypeId },
      context
    ): Promise<ProductPortion> =>
      await ProductPortionTypeRepository.saveProductPortion(
        productPortion,
        productPortionTypeId
      ),
    deleteProductPortionType: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortionType>> => {
      const result = await ProductPortionTypeRepository.deleteProductPortionType(id);
      !!result && MenuCategoryRepository.removeProductPortionTypeFromProducts(id);
      return result;
    },
    deleteProductPortion: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortion>> => {
      const result = await ProductPortionTypeRepository.deleteProductPortion(id);
      !!result && MenuCategoryRepository.removeProductPortionFromProducts(id);
      return result;
    }
  },
};
