import React from 'react';
import { AppLayout } from 'layouts';
import { QrCodeContainer } from 'pods/qrcode';

export const QrCodeScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <QrCodeContainer url={process.env.QR_URL} />
      </AppLayout>
    </>
  );
};
