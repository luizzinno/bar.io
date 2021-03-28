import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './login.validation';

//Vm
import { Login, createEmptyLogin } from './login.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//CSS
import * as classes from './login.styles';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
  const { onLogin } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title='Login' className={classes.title} />
      <CardContent>
        <Formik
          onSubmit={onLogin}
          initialValues={createEmptyLogin()}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextFieldComponent name='email' label='EMail' />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent name='password' label='Clave' type='password' />
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary' size='large' fullWidth={true}>
                    Login
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
