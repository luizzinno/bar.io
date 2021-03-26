import * as apiModel from 'core/api/product-portions/product-portions.model';
import * as viewModel from './product-portion.vm';

export const mapProductPortionListFromApiToViewModel = (
  productPortions: apiModel.ProductPortion[],
): viewModel.ProductPortion[] =>
  productPortions?.map((p) => mapProductPortionFromApiToViewModel(p)) ?? [];

const mapProductPortionFromApiToViewModel = (
  productPortion: apiModel.ProductPortion,
): viewModel.ProductPortion => !!productPortion ? ({ ...productPortion, price: 0 }) : viewModel.createEmptyProductPortionVm();

export const mapProductPortionTypeListFromApiToViewModels = (
  productPortionTypes: apiModel.ProductPortionType[],
): viewModel.ProductPortionType[] =>
  productPortionTypes?.map((t) => mapProductPortionTypeApiToViewModel(t)) ?? [];

const mapProductPortionTypeApiToViewModel = (
  productPortionType: apiModel.ProductPortionType,
): viewModel.ProductPortionType => !!productPortionType ? ({
  id: productPortionType.id,
  name: productPortionType.name,
}) : viewModel.createEmptyProductPortionTypeVm();
