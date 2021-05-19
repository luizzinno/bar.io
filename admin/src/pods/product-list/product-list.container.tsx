import React from 'react';
import {
  deleteProduct,
  getMenuCategories,
  getMenuCategoryById,
  getProductById,
  MenuCategory,
  saveProduct,
  saveProducts,
} from 'core/api';
import { routes } from 'core/router';
import {
  mapMenuCategorieListFromApiModelToListItem,
  mapProductListFromApiModelToListItem,
} from 'pods/categories-list/categories-list.mapper';
import { useHistory, useParams } from 'react-router-dom';
import { ProductListComponent } from './product-list.component';
import { useMenuCategories } from './use-menu-categories.hook';
import { reorder } from 'common/utils/array';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';

interface Params {
  categoryId?: string;
}

export const ProductListContainer: React.FunctionComponent = () => {
  const { categoryId } = useParams<Params>();
  const {
    categories,
    setCategories,
    selectedCategoryId,
    setSelectedCategoryId,
    updateSelectedCategoryProducts,
    getProductsByCategoryId,
  } = useMenuCategories([], categoryId);
  const [error, setError] = React.useState<string>(null);
  const history = useHistory();

  const getMenuCategory = async (categoryId: string): Promise<MenuCategory> => {
    try {
      return await getMenuCategoryById(categoryId);
    } catch (error) {
      setError('Error retrieving category');
    }
  };

  const onAddProduct = () => {
    history.push(routes.editProduct());
  };

  const onCancelProductEdit = () => {
    history.push(routes.productList);
  };

  const onChangeCategory = (id: string) => {
    setSelectedCategoryId(id);
  };

  const onChangeProductVisibility = async (id: string) => {
    const product = await getProductById(id);
    product.visible = !product.visible;

    try {
      await saveProduct(product);
    } catch (error) {
      setError('Error saving product');
    }

    const category = await getMenuCategory(selectedCategoryId);
    updateSelectedCategoryProducts(category.products);
  };

  const onReorderProducts = async (startIndex: number, endIndex: number) => {
    try {
      const products = getProductsByCategoryId(selectedCategoryId);
      const newProducts = reorder(products, startIndex, endIndex);
      updateSelectedCategoryProducts(newProducts);
      await saveProducts(selectedCategoryId, newProducts);
    } catch (error) {
      setError('Error reordering categories');
    }
  };

  const onDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      setError('Error deleting product');
    }

    const menuCategory = await getMenuCategory(selectedCategoryId);
    updateSelectedCategoryProducts(menuCategory.products);
  };

  const onEditProduct = (productId: string) => history.push(routes.editProduct(`${productId}`));

  const onCloseErrorAlert = () => {
    setError(null);
  };

  const loadData = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(menuCategories);
  };

  React.useEffect(() => {
    async function load() {
      await loadData();
    }
    load();
  }, []);

  return (
    <>
      <ProductListComponent
        categories={mapMenuCategorieListFromApiModelToListItem(categories)}
        products={mapProductListFromApiModelToListItem(getProductsByCategoryId(selectedCategoryId))}
        selectedCategoryId={selectedCategoryId}
        onAddProduct={onAddProduct}
        onCancelProductEdit={onCancelProductEdit}
        onChangeCategory={onChangeCategory}
        onChangeProductVisibility={onChangeProductVisibility}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
        onReorderProducts={onReorderProducts}
      />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
