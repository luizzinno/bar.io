import { Button, Card, CardContent, CardHeader } from '@material-ui/core';
import React from 'react';
import * as classes from './qrcode.styles';

interface QrCodeComponentProps {
  qrCodeUrl: string;
  text: string[];
  onDownloadPdf: () => void;
  onDownloadImage: () => void;
}

export const QrCodeComponent: React.FunctionComponent<QrCodeComponentProps> = (props) => {
  const { qrCodeUrl, text, onDownloadImage, onDownloadPdf } = props;

  return (
    <Card>
      <CardHeader component='h1' title='Código QR'></CardHeader>
      <CardContent>
        <div className={classes.container}>
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
        &nbsp;
        {!!qrCodeUrl && (
          <Button onClick={onDownloadPdf} variant='contained' color='secondary'>
            Descargar Pdf
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
