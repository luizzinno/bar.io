import * as apiModel from 'core/api/menu-categories/product.model';
import * as viewModel from './product.vm';


export const mapProductFromApiToViewModel = (product: apiModel.Product): viewModel.Product => ({
  id: product.id,
  categoryId: null,
  name: product.name,
  description: product.description,
  portionTypeId: product.portionTypeId,
  portions: mapPortionListFromApiToViewModel(product.portions),
  visible: product.visible,
});

export const mapProductFromViewToApiModel = (product: viewModel.Product): apiModel.Product => ({
  id: product.id,
  name: product.name,
  description: product.description,
  portionTypeId: product.portionTypeId,
  portions: mapPortionListFromViewToApiModel(product.portions),
  visible: product.visible,
});

export const createEmptyProductVm = (): viewModel.Product => ({
  id: '',
  categoryId: '',
  name: '',
  description: '',
  portionTypeId: '',
  portions: [],
  visible: false,
});

const mapPortionListFromViewToApiModel = (
  portions: viewModel.Portion[],
): apiModel.Portion[] => portions.map(p => ({ id: p.id, price: p.price }));

const mapPortionListFromApiToViewModel = (portions: apiModel.Portion[]): viewModel.Portion[] => portions?.map(p => ({ ...p, name: '' })) ?? [];
