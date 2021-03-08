import React from 'react';
import { ListItem, SortableListComponent } from 'common/components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
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
  // const handleChangeCategory = (e: React.ChangeEvent<{ value: number }>) =>
  //   onChangeCategory(e.target.value);
  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChangeCategory(parseInt(e.target.value));
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title='Productos'
        action={
          <IconButton
            color='primary'
            aria-label='back home'
            className={classes.icon}
            onClick={() => history.push(switchRoutes.dashboard)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        }
      />
      <CardContent>
        <FormControl variant='outlined' fullWidth={true}>
          <InputLabel id='categorySelectLabel'>Seleccione una categoría</InputLabel>
          <Select
            label='Seleccione una categoría'
            labelId='categorySelectLabel'
            value={!!selectedCategoryId ? selectedCategoryId : ''}
            onChange={handleChangeCategory}>
            {categories.map((c) => (
              <MenuItem key={c.id} value={c.id} selected={selectedCategoryId === c.id}>
                {c.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
      </CardContent>
    </Card>
  );
};
