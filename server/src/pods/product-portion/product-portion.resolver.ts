import { GraphQLResolver } from 'common/models';
import { productPortionTypeRepository, menuCategoryRepository } from 'dals';
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
      (await productPortionTypeRepository.getProductPortionTypes())?.map((p) =>
        mapFromProductPortionTypeModelToApiModel(p)
      ) ?? [],
    getProductPortionTypeById: async (
      parent,
      { id },
      context
    ): Promise<ProductPortionType> =>
      mapFromProductPortionTypeModelToApiModel(
        await productPortionTypeRepository.getProductPortionTypeById(id)
      ),
  },
  Mutation: {
    saveProductPortionType: async (
      parent,
      { productPortionType },
      context
    ): Promise<ProductPortionType> =>
      mapFromProductPortionTypeModelToApiModel(
        await productPortionTypeRepository.saveProductPortionType(
          mapFromProductPortionTypeApiModelToModel(productPortionType)
        )
      ),
    saveProductPortion: async (
      parent,
      { productPortion, productPortionTypeId },
      context
    ): Promise<ProductPortion> =>
      mapFromProductPortionModelToApiModel(
        await productPortionTypeRepository.saveProductPortion(
          mapFromProductPortionApiModelToModel(productPortion),
          productPortionTypeId
        )
      ),
    deleteProductPortionType: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortionType>> => {
      const result = await productPortionTypeRepository.deleteProductPortionType(
        id
      );
      if (!!result || result?.length === 0)
        menuCategoryRepository.removeProductPortionTypeFromProducts(id);
      return result?.map((t) => mapFromProductPortionTypeModelToApiModel(t));
    },
    deleteProductPortion: async (
      parent,
      { id },
      context
    ): Promise<Array<ProductPortion>> => {
      const result = await productPortionTypeRepository.deleteProductPortion(
        id
      );

      if (!!result || result?.length === 0)
        menuCategoryRepository.removeProductPortionFromProducts(id);
      return result?.map((p) => mapFromProductPortionModelToApiModel(p));
    },
  },
};
