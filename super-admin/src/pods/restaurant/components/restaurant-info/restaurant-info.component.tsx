import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './restaurant-info.validation';

//VM
import { RestaurantInfo } from './restaurant-info.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//CSS
//import * as classes from './restaurant-info.styles';

interface Props {
  info: RestaurantInfo;
  onSave: (restaurantInfo: RestaurantInfo) => void;
  onDelete: (id: string) => void;
}

export const RestaurantInfoComponent: React.FC<Props> = (props) => {
  const { info, onSave, onDelete } = props;
  return (
    <>
      <Formik
        onSubmit={onSave}
        initialValues={info}
        enableReinitialize={true}
        validate={formValidation.validateForm}>
        {() => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldComponent name='cif' label='CIF Restaurante' />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent name='name' label='Nombre Restaurante' />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent name='email' label='Email' />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent name='numberPhone' label='Móvil' />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent name='initialPassword' label='Clave inicial' />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {info.id ? (
                <Grid item xs={12} sm={6}>
                  <Button
                    type='button'
                    variant='contained'
                    color='secondary'
                    size='large'
                    fullWidth={true}
                    onClick={() => {
                      onDelete(info.id);
                    }}>
                    Delete
                  </Button>
                </Grid>
              ) : (
                <></>
              )}
              <Grid item xs={12} sm={6}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth={true}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};
