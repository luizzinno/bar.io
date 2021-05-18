import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './administrator-info.validation';

//VM
import { AdministratorInfo } from './administrator-info.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface Props {
  info: AdministratorInfo;
  onEdit: (administratorInfo: AdministratorInfo) => void;
  onDelete: (id: string) => void;
}

export const AdministratorInfoComponent: React.FC<Props> = (props) => {
  const { info, onEdit, onDelete } = props;
  return (
    <>
      <Formik
        onSubmit={onEdit}
        initialValues={info}
        enableReinitialize={true}
        validate={formValidation.validateForm}>
        {() => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldComponent name='name' label='Nombre' />
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
                  Cancel
                </Button>
              </Grid>
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
