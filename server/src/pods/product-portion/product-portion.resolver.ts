import { GraphQLResolver } from 'common/models';
import { ProductPortionTypeRepository, MenuCategoryRepository } from 'dals';
import {
  mapFromProductPortionApiModelToModel,
  mapFromProductPortionModelToApiModel,
  mapFromProductPortionTypeApiModelToModel,
  mapFromProductPortionTypeModelToApiModel,
} from './product-portion.mapper';
import { ProductPortion, ProductPortionType } from './product-portion.model';

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
      (await ProductPortionTypeRepository.getProductPortionTypes())?.map((p) =>
        mapFromProductPortionTypeModelToApiModel(p)
      ) ?? [],
    getProductPortionTypeById: async (
      parent,
      { id },
      context
    ): Promise<ProductPortionType> =>
      mapFromProductPortionTypeModelToApiModel(
        await ProductPortionTypeRepository.getProductPortionTypeById(id)
      ),
  },
  Mutation: {
    saveProductPortionType: async (
      parent,
      { productPortionType },
      context
    ): Promise<ProductPortionType> =>
      mapFromProductPortionTypeModelToApiModel(
        await ProductPortionTypeRepository.saveProductPortionType(
          mapFromProductPortionTypeApiModelToModel(productPortionType)
        )
      ),
    saveProductPortion: async (
      parent,
      { productPortion, productPortionTypeId },
      context
    ): Promise<ProductPortion> =>
      mapFromProductPortionModelToApiModel(
        await ProductPortionTypeRepository.saveProductPortion(
          mapFromProductPortionApiModelToModel(productPortion),
          productPortionTypeId
        )
      ),
    deleteProductPortionType: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortionType>> => {
      const result = await ProductPortionTypeRepository.deleteProductPortionType(
        id
      );
      if (!!result || result?.length === 0)
        MenuCategoryRepository.removeProductPortionTypeFromProducts(id);
      return result?.map((t) => mapFromProductPortionTypeModelToApiModel(t));
    },
    deleteProductPortion: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortion>> => {
      const result = await ProductPortionTypeRepository.deleteProductPortion(
        id
      );

      if (!!result || result?.length === 0)
        MenuCategoryRepository.removeProductPortionFromProducts(id);
      return result?.map((p) => mapFromProductPortionModelToApiModel(p));
    },
  },
};
