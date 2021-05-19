import * as model from 'dals/product-portion/product-portion.model';
import * as apiModel from './product-portion.model';

export const mapFromProductPortionModelToApiModel = (
  portion: model.ProductPortion
): apiModel.ProductPortion =>
  !!portion
    ? {
      id: portion?._id ?? '',
      name: portion?.name ?? '',
    }
    : null;

export const mapFromProductPortionTypeModelToApiModel = (
  productPortionType: model.ProductPortionType
): apiModel.ProductPortionType =>
  !!productPortionType
    ? {
      id: productPortionType?._id ?? '',
      name: productPortionType?.name ?? '',
      portions:
        productPortionType?.portions?.map((p) =>
          mapFromProductPortionModelToApiModel(p)
        ) ?? [],
    }
    : null;

export const mapFromProductPortionApiModelToModel = (
  portion: apiModel.ProductPortion
): model.ProductPortion =>
  !!portion
    ? {
      _id: portion?.id ?? '',
      name: portion?.name ?? '',
    }
    : null;

export const mapFromProductPortionTypeApiModelToModel = (
  productPortionType: apiModel.ProductPortionType
): model.ProductPortionType =>
  !!productPortionType
    ? {
      _id: productPortionType?.id ?? '',
      name: productPortionType?.name ?? '',
      portions:
        productPortionType?.portions?.map((p) =>
          mapFromProductPortionApiModelToModel(p)
        ) ?? [],
    }
    : null;
