import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './bar-info.validation';

//VM
import { BarInfo } from './bar-info.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//CSS
import * as classes from './bar-info.styles';

import { switchRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

export interface Props {
  info: BarInfo;
  onSave: (barInfo: BarInfo) => void;
  onCancel: () => void;
}
export const BarInfoComponent: React.FunctionComponent<Props> = (props) => {
  const { info, onSave, onCancel } = props;
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title='Bar info'
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
      <CardContent className={classes.content}>
        <Formik
          onSubmit={onSave}
          initialValues={info}
          enableReinitialize={true}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <div className={classes.form}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent name='infoA' label='Info A' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldComponent name='infoB' label='Info B' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldComponent name='infoC' label='Info C' />
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
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
