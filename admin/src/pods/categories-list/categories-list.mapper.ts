import { MenuCategory, Product } from 'core/api';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { createEmptyListItem } from 'common/components/sortable-list/list-item.vm';

export const mapMenuCategorieListFromApiModelToListItem = (categories: MenuCategory[]): ListItem[] =>
  !!categories ? categories.map((c) => mapMenuCategoryApiModelToListItem(c)) : [];

export const mapMenuCategoryApiModelToListItem = (menuCategory: MenuCategory): ListItem =>
  !!menuCategory ? { id: menuCategory.id, value: menuCategory.name } : createEmptyListItem();

export const mapProductListFromApiModelToListItem = (products: Product[]): ListItem[] =>
  !!products ? products?.map((d) => mapProductApiModelToListItem(d)) : [];

export const mapProductApiModelToListItem = (product: Product): ListItem =>
  !!product
    ? {
      id: product.id,
      value: product.name,
      visible: product.visible,
    }
    : { ...createEmptyListItem(), visible: true };
