import React from 'react';
import { Button, Card, CardContent, CardHeader } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import * as classes from './qrcode.styles';

interface QrCodeComponentProps {
  qrCodeUrl: string;
  text: Array<string>;
  onDownloadPdf: () => void;
  onDownloadImage: () => void;
}

export const QrCodeComponent: React.FunctionComponent<QrCodeComponentProps> = (props) => {
  const { qrCodeUrl, text, onDownloadImage, onDownloadPdf } = props;
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardHeader component='h1' title='Código QR'></CardHeader>
      <CardContent>
        <div>
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
        </div>
        {!!qrCodeUrl && (
          <Button onClick={onDownloadImage} variant='contained' color='primary'>
            Descargar imagen
          </Button>
        )}
        {!!qrCodeUrl && (
          <Button onClick={onDownloadPdf} variant='contained' color='secondary'>
            Descargar Pdf
          </Button>
        )}
      </CardContent>
      <Button variant='outlined' color='primary' onClick={() => history.push(switchRoutes.dashboard)}>
        Back to home
      </Button>
    </Card>
  );
};
