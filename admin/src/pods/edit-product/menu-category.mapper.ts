import * as apiModel from 'core/api';
import * as viewModel from './menu-category.vm';

export const mapMenuCategoryListFromApiToViewModel = (
  categories: apiModel.MenuCategory[],
): viewModel.MenuCategory[] =>
  !!categories ? categories.map((c) => mapMenuCategoryFromApiToViewModel(c)) : [];

export const mapMenuCategoryFromApiToViewModel = (
  category: apiModel.MenuCategory,
): viewModel.MenuCategory =>
  !!category ? { id: category.id, name: category.name } : createEmptyMenuCategoryVm();

export const createEmptyMenuCategoryVm = (): viewModel.MenuCategory => ({
  id: '',
  name: '',
});
