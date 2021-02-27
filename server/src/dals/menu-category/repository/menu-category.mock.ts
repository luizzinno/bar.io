
import { createMockRepository } from 'common/helpers';
import { MenuCategory, Product } from 'dals';
import { v4 as uuid4 } from 'uuid';

const menuCategoryRepository = createMockRepository<MenuCategory>(() =>
  uuid4()
);

export const getMenuCategories = async (): Promise<Array<MenuCategory>> =>
  menuCategoryRepository.getCollection();

export const getMenuCategoryById = async (id: string): Promise<MenuCategory> =>
  menuCategoryRepository.getItemById(id);

export const saveMenuCategory = async (
  menuCategory: MenuCategory
): Promise<MenuCategory> => menuCategoryRepository.saveItem(menuCategory);

export const getMenuCategoryByProductId = async (
  productId: string
): Promise<MenuCategory> => {
  const category = menuCategoryRepository
    .getCollection()
    .find((c) => c.products.some((p) => p._id == productId));

  return !!category ? { ...category } : null;
};

export const saveCategories = async (
  categories: Array<MenuCategory>
): Promise<Array<MenuCategory>> => menuCategoryRepository.setItems(categories);

export const deleteMenuCategory = async (
  id: string
): Promise<Array<MenuCategory>> => menuCategoryRepository.deleteItem(id);

export const getProductById = async (id: string): Promise<Product> => {
  const product = menuCategoryRepository
    .getCollection()
    .find((c) => c.products.some((p) => p._id == id))
    ?.products?.find((p) => p._id == id);

  return !!product ? { ...product } : null;
};

export const saveProduct = async (
  product: Product,
  categoryId?: string
): Promise<Product> => {
  let menuCategory: MenuCategory;
  if (!!categoryId) {
    menuCategory = await getMenuCategoryById(categoryId);
  } else if (!!product._id) {
    menuCategory = await getMenuCategoryByProductId(product._id);
  }

  if (!!menuCategory) {
    const productRepository = createMockRepository<Product>(
      () => uuid4(),
      menuCategory.products
    );
    const savedProduct = productRepository.saveItem(product);
    const result = menuCategoryRepository.saveItem({
      ...menuCategory,
      products: productRepository.getCollection(),
    });
    return !!result ? savedProduct : null;
  }
  return null;
};

export const saveProducts = async (
  categoryId: string,
  products: Array<Product>
): Promise<Array<Product>> => {
  const menuCategory = await getMenuCategoryById(categoryId);

  if (!!menuCategory) {
    const updatedMenuCategory = { ...menuCategory, products: products };
    return !!menuCategoryRepository.saveItem(updatedMenuCategory)
      ? updatedMenuCategory.products
      : [];
  }

  return [];
};

export const deleteProduct = async (id: string): Promise<Array<Product>> => {
  const category = await getMenuCategoryByProductId(id);

  if (!!category) {
    const productRepository = createMockRepository<Product>(
      () => false,
      category.products
    );
    const updatedProducts = productRepository.deleteItem(id);
    const updatedMenuCategory = menuCategoryRepository.saveItem({
      ...category,
      products: [...updatedProducts],
    });
    return updatedMenuCategory?.products ?? [];
  }

  return [];
};

export const removeProductPortionFromProducts = async (
  productPortionId: string
): Promise<boolean> => {
  const menuCategories = menuCategoryRepository.getCollection();
  const updatedMenuCategories = menuCategories.map((mc) => ({
    ...mc,
    products: mc.products?.map((p) => ({
      ...p,
      portions: p.portions?.filter((pr) => pr._id != productPortionId),
    })),
  }));
  return !!menuCategoryRepository.setItems(updatedMenuCategories);
};

export const removeProductPortionTypeFromProducts = async (
  productPortionTypeId: string
): Promise<boolean> => {
  const menuCategories = menuCategoryRepository.getCollection();
  const updatedMenuCategories = menuCategories.map((mc) => ({
    ...mc,
    products: mc.products?.map((p) => ({
      ...p,
      portionTypeId:
        p.portionTypeId === productPortionTypeId ? null : p.portionTypeId,
      portions: p.portionTypeId === productPortionTypeId ? null : p.portions,
    })),
  }));
  return !!menuCategoryRepository.setItems(updatedMenuCategories);
};
