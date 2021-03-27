import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import * as classes from './qrcode.styles';

interface QrCodeComponentProps {
  qrCodeUrl: string;
  text: string[];
  onDownloadPdf: () => void;
  onDownloadImage: () => void;
}

export const QrCodeComponent: React.FunctionComponent<QrCodeComponentProps> = (props) => {
  const { qrCodeUrl, text, onDownloadImage, onDownloadPdf } = props;
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title='Código QR'
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
        <Grid container direction='column' justify='center' alignItems='center'>
          {!!qrCodeUrl && <img src={qrCodeUrl} alt='Código QR' />}
          {!!text && (
            <p className={classes.text}>
              {text.map(
                (t, index) =>
                  !!t && (
                    <span key={index}>
                      {t}
                      <br />
                    </span>
                  ),
              )}
            </p>
          )}
        </Grid>
        {!!qrCodeUrl && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onDownloadImage}
                type='button'
                variant='contained'
                color='secondary'
                size='large'
                fullWidth={true}>
                Descargar imagen
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onDownloadPdf}
                type='button'
                variant='contained'
                color='primary'
                size='large'
                fullWidth={true}>
                Descargar Pdf
              </Button>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};
