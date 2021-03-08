import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { DropDownComponent, TextFieldComponent } from 'common/components';
import { Field, Form, Formik } from 'formik';
import { formValidation } from './edit-product.validation';
import { MenuCategory } from './menu-category.vm';
import { ProductPortion, ProductPortionType } from './product-portion.vm';
import { Product } from './product.vm';
import * as classes from './edit-product.styles';
import { useHistory } from 'react-router-dom';

interface EditProductProps {
  categories: Array<MenuCategory>;
  portionTypes: Array<ProductPortionType>;
  portions: Array<ProductPortion>;
  product: Product;
  onSave: (product: Product) => void;
  onChangeName: (name: string) => void;
  onChangeDescription: (description: string) => void;
  onChangePortionPrice: (portionId: number, price: number) => void;
  onChangeCategory: (categoryId: number) => void;
  onChangePortionType: (portionTypeId: number) => void;
  onCancel: () => void;
}

export const EditProductComponent: FunctionComponent<EditProductProps> = (props) => {
  const {
    categories,
    portionTypes,
    product,
    portions,
    onChangeName,
    onChangeDescription,
    onChangePortionPrice,
    onChangeCategory,
    onChangePortionType,
    onSave,
    onCancel,
  } = props;
  const history = useHistory();
  const handleChangeCategory = (e) => onChangeCategory(e.target.value);
  const handlePortionTypeChange = (e) => onChangePortionType(e.target.value);
  const handleChangeName = (e) => onChangeName(e.target.value);
  const handleChangeDescription = (e) => onChangeDescription(e.target.value);
  const handleChangePortionPrice = (e) =>
    onChangePortionPrice(e.target.getAttribute('name').split(/[\[\]]/)[1], e.target.value);

  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title={!!product?.id ? `Editar '${product.name}'` : 'Añadir producto'}
        action={
          <IconButton
            color='primary'
            aria-label='back home'
            className={classes.icon}
            onClick={() => history.goBack()}>
            <ArrowBackIcon fontSize='large' />
          </IconButton>
        }
      />
      <CardContent>
        <Formik
          enableReinitialize
          onSubmit={onSave}
          initialValues={product}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <Field type='hidden' name='id' />
              <Field type='hidden' name='visible' />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextFieldComponent name='name' label='Nombre' onKeyUp={handleChangeName} />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    name='description'
                    label='Descripción'
                    onKeyUp={handleChangeDescription}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DropDownComponent
                    label='Categoría'
                    labelId='categoryIdLabel'
                    name='categoryId'
                    onChange={handleChangeCategory}
                    disabled={!!product?.id}
                    value={!!categories && !!product.categoryId ? product.categoryId ?? '' : ''}>
                    {categories.map((c) => (
                      <MenuItem key={`category-${c.id}`} value={c.id}>
                        {c.name}
                      </MenuItem>
                    ))}
                  </DropDownComponent>
                </Grid>
                <Grid item xs={12} md={6}>
                  <DropDownComponent
                    label='Ración'
                    labelId='portionTypeIdLabel'
                    name='portionTypeId'
                    onChange={handlePortionTypeChange}
                    value={!!portionTypes && !!product.portionTypeId ? product.portionTypeId : ''}>
                    {!!portionTypes ? (
                      portionTypes.map((t) => (
                        <MenuItem key={`portionType-${t.id}`} value={t.id}>
                          {t.name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem key='portionType-0' value='0'>
                        Única
                      </MenuItem>
                    )}
                  </DropDownComponent>
                </Grid>
                {!!portions &&
                  portions.map((p) => (
                    <Grid item xs={6} md={3}>
                      <TextFieldComponent
                        key={`portionPrices[${p.id}]`}
                        name={`portionPrices[${p.id}]`}
                        label={`Precio - ${p.name}`}
                        type='number'
                        onKeyUp={handleChangePortionPrice}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    fullWidth={true}
                    type='button'
                    onClick={onCancel}>
                    Cancelar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    fullWidth={true}>
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
