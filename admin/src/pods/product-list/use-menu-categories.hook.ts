import { MenuCategory, Product } from 'core/api';
import produce from 'immer';
import React from 'react';

interface UseMenuCategoriesHook {
  categories: MenuCategory[];
  setCategories: (categories: MenuCategory[]) => void;
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  updateSelectedCategoryProducts: (products: Product[]) => void;
  getProductsByCategoryId: (id: string) => Product[];
}

export const useMenuCategories = (
  cat: MenuCategory[],
  categoryId: string,
): UseMenuCategoriesHook => {
  const getProductsByCategoryId = (id: string): Product[] =>
    categories.filter((c) => c.id === id)[0]?.products ?? [];
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<string>(categoryId);
  const [categories, setCategories] = React.useState<MenuCategory[]>(cat);

  const updateSelectedCategoryProducts = (prods: Product[]) => {
    const newCategories = produce(categories, (draft) => {
      draft.find((c) => c.id === selectedCategoryId).products = prods;
    });
    setCategories(newCategories);
  };

  return {
    categories,
    setCategories,
    selectedCategoryId,
    setSelectedCategoryId,
    updateSelectedCategoryProducts,
    getProductsByCategoryId,
  };
};
