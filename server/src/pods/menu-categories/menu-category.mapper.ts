import * as model from 'dals/menu-category/menu-category.model';
import * as apiModel from './menu-category.model';

export const mapFromMenuCategoryModelToApiModel = (
  menuCategory: model.MenuCategory
): apiModel.MenuCategory =>
  !!menuCategory
    ? {
        id: menuCategory._id,
        name: menuCategory.name,
        products:
          menuCategory.products?.map((p) => mapFromProductModelToApiModel(p)) ??
          [],
      }
    : null;

export const mapFromProductModelToApiModel = (
  product: model.Product
): apiModel.Product =>
  !!product
    ? {
        id: product._id,
        description: product.description,
        name: product.name,
        portionTypeId: product.portionTypeId,
        visible: product.visible,
        portions:
          product.portions?.map((p) => mapFromPortionModelToApiModel(p)) ?? [],
      }
    : null;

export const mapFromPortionModelToApiModel = (
  portion: model.Portion
): apiModel.Portion =>
  !!portion
    ? {
        id: portion._id,
        price: portion.price,
      }
    : null;

export const mapFromMenuCategoryApiModelToModel = (
  menuCategory: apiModel.MenuCategory
): model.MenuCategory =>
  !!menuCategory
    ? {
        _id: menuCategory.id,
        name: menuCategory.name,
        products:
          menuCategory.products?.map((p) => mapFromProductApiModelToModel(p)) ??
          [],
      }
    : null;

export const mapFromProductApiModelToModel = (
  product: apiModel.Product
): model.Product =>
  !!product
    ? {
        _id: product.id,
        description: product.description,
        name: product.name,
        portionTypeId: product.portionTypeId,
        visible: product.visible,
        portions:
          product.portions?.map((p) => mapFromPortionApiModelToModel(p)) ?? [],
      }
    : null;

export const mapFromPortionApiModelToModel = (
  portion: apiModel.Portion
): model.Portion =>
  !!portion
    ? {
        _id: portion.id,
        price: portion.price,
      }
    : null;
