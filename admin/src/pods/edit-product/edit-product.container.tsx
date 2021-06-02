import {
  getMenuCategories,
  getMenuCategoryByProductId,
  getProductById,
  getProductPortionTypeById,
  getProductPortionTypes as getProductPortionTypes,
  ProductPortionType,
  saveProduct,
} from 'core/api';
import { routes } from 'core/router';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { EditProductComponent } from './edit-product.component';
import * as classes from './edit-product.styles';
import { mapMenuCategoryListFromApiToViewModel } from './menu-category.mapper';
import { MenuCategory } from './menu-category.vm';
import { mapProductPortionTypeListFromApiToViewModels } from './product-portion.mapper';
import {
  createEmptyProductVm,
  mapProductFromApiToViewModel,
  mapProductFromViewToApiModel,
} from './product.mapper';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';
import { Product } from './product.vm';
import produce from 'immer';

interface Params {
  productId?: string;
}

export const EditProductContainer: React.FunctionComponent = () => {
  const { productId } = useParams<Params>();
  const [categories, setCategories] = React.useState<MenuCategory[]>([]);
  const [product, setProduct] = React.useState<Product>(createEmptyProductVm());
  const [portionTypes, setPortionTypes] = React.useState<ProductPortionType[]>([]);
  const [error, setError] = React.useState<string>(null);
  const history = useHistory();

  const onChangeName = (name: string) => setProduct({ ...product, name: name });
  const onChangeDescription = (description: string) =>
    setProduct({ ...product, description: description });
  const onChangePortionPrice = (id: string, price: number) => {
    setProduct({
      ...product,
      portions: produce(product.portions, (newPortionPrices) => {
        newPortionPrices.find((p) => p.id === id).price = +price;
      }),
    });
  };

  const onChangeCategory = (categoryId: string) => {
    setProduct({ ...product, categoryId });
  };

  const onChangePortionType = async (portionTypeId: string) => {
    try {
      const productPortionType = await getProductPortionTypeById(portionTypeId);
      setProduct({
        ...product,
        portionTypeId,
        portions: productPortionType.portions.map((p) => ({ ...p, price: 0.0 })),
      });
    } catch (error) {
      setError('Error retrieving portion type');
    }
  };

  const onSave = (p: Product) => {
    try {
      saveProduct(mapProductFromViewToApiModel({ ...p, visible: false }), p.categoryId).then(() =>
        history.push(routes.productList),
      );
    } catch (error) {
      setError('Error saving product');
    }
  };

  const onCancel = () => history.goBack();

  const onCloseErrorAlert = () => {
    setError(null);
  };

  const getProductInfo = async () => {
    try {
      if (!!productId) {
        const product = await getProductById(productId);
        if (!!product) {
          const categoryId = (await getMenuCategoryByProductId(product.id))?.id;
          const productPortionType = await getProductPortionTypeById(product.portionTypeId);
          const productViewModel = mapProductFromApiToViewModel(product);

          productViewModel.portions.map(
            (p) => (p.name = productPortionType.portions?.find((s) => s.id === p.id)?.name ?? ''),
          );

          setProduct({
            ...productViewModel,
            categoryId: categoryId,
          });
        }
      }
    } catch (error) {
      setError('Error getting product');
    }

    try {
      const menuCategories = await getMenuCategories();
      setCategories(mapMenuCategoryListFromApiToViewModel(menuCategories));
    } catch (error) {
      setError('Error getting categories');
    }

    try {
      const portionTypes = await getProductPortionTypes();
      setPortionTypes(portionTypes);
    } catch (error) {
      setError('Error getting portion types');
    }
  };

  React.useEffect(() => {
    async function loadProductInfo() {
      await getProductInfo();
    }
    loadProductInfo();
  }, []);

  return (
    <div className={classes.container}>
      <EditProductComponent
        categories={categories}
        portionTypes={mapProductPortionTypeListFromApiToViewModels(portionTypes)}
        product={product}
        onSave={onSave}
        onCancel={onCancel}
        onChangeCategory={onChangeCategory}
        onChangePortionType={onChangePortionType}
        onChangeName={onChangeName}
        onChangeDescription={onChangeDescription}
        onChangePortionPrice={onChangePortionPrice}
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
    </div>
  );
};
