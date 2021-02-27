import React from 'react';
import { ListItem, SortableListComponent } from 'common/components';
import {
  Card,
  CardContent,
  CardHeader,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import * as classes from './product-list.styles';

interface ProductListComponentProps {
  selectedCategoryId: number;
  categories: Array<ListItem>;
  products: Array<ListItem>;
  onChangeCategory: (id: number) => void;
  onEditProduct: (id: number) => void;
  onDeleteProduct: (id: number) => void;
  onChangeProductVisibility: (id: number) => void;
  onReorderProducts: (startIndex: number, endIndex: number) => void;
  onAddProduct: () => void;
  onCancelProductEdit: () => void;
}

export const ProductListComponent: React.FunctionComponent<ProductListComponentProps> = (props) => {
  const {
    selectedCategoryId,
    categories,
    products,
    onChangeCategory,
    onEditProduct,
    onDeleteProduct,
    onChangeProductVisibility,
    onReorderProducts,
    onAddProduct,
    onCancelProductEdit,
  } = props;
  const handleChangeCategory = (e: React.ChangeEvent<{ value: number }>) =>
    onChangeCategory(e.target.value);
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardHeader component='h1' title='Productos' />
      <CardContent>
        <InputLabel id='categorySelectLabel'>Seleccione una categoría</InputLabel>
        <Select
          labelId='categorySelectLabel'
          id='selectCategory'
          value={!!selectedCategoryId ? selectedCategoryId : ''}
          onChange={handleChangeCategory}
          fullWidth>
          {categories.map((c) => (
            <MenuItem key={c.id} value={c.id} selected={selectedCategoryId === c.id}>
              {c.value}
            </MenuItem>
          ))}
        </Select>
        {!!selectedCategoryId && (
          <SortableListComponent
            itemTypeName='productos'
            items={products}
            onEdit={onEditProduct}
            onDelete={onDeleteProduct}
            onChangeVisibility={onChangeProductVisibility}
            onReorder={onReorderProducts}
            onAdd={onAddProduct}
            onCancel={onCancelProductEdit}
          />
        )}
        <Button variant='outlined' color='primary' onClick={() => history.push(switchRoutes.dashboard)}>
          Back to home
        </Button>
      </CardContent>
    </Card>
  );
};
