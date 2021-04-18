import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './reset-password.validation';

import { Credential, createEmptyCredential } from './credential.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//CSS
//import * as classes from './restaurant-info.styles';

interface Props {
  onSave: (newPassword: Credential) => void;
  onCancel: () => void;
}

export const ResetPassword: React.FC<Props> = (props) => {
  const { onSave, onCancel } = props;
  return (
    <>
      <Formik
        onSubmit={onSave}
        initialValues={createEmptyCredential()}
        enableReinitialize={true}
        validate={formValidation.validateForm}>
        {() => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldComponent name='newPassword' label='Nueva Clave' />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent name='repeatPassword' label='Repetir Clave' />
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
                  onClick={onCancel}>
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
