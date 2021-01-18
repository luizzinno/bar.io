import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import React from 'react';
import { QrCodeComponent } from './qrcode.component';
import * as api from 'pods/bar-info/api/bar-info.api';
import { useHistory } from 'react-router-dom';

interface QrCodeContainerProps {
  url: string;
}

interface QrCodeInfo {
  url: string;
  text: Array<string>;
}

export const QrCodeContainer: React.FunctionComponent<QrCodeContainerProps> = (props) => {
  const { url } = props;
  const [qrCodeInfo, setQrCodeInfo] = React.useState<QrCodeInfo>({ url: '', text: [] });
  const history = useHistory();

  const generatePdf = () => {
    const img = new Image();
    img.src = qrCodeInfo.url;
    const pdf = new jsPDF();
    pdf.addImage(img, 'png', 0, 0, 64, 64);
    const textStartX = 33;
    const textStartYOffset = 10;
    let textStartY = 70;
    qrCodeInfo.text.map(
      (t) =>
        !!t &&
        pdf.text(t, textStartX, textStartY, null, null, 'center') &&
        (textStartY += textStartYOffset),
    );
    pdf.save(null);
  };

  const generateImage = () =>
    window
      .open()
      .document.write(
        `<a href=${qrCodeInfo.url} target='_blank'><img src=${qrCodeInfo.url} /></a>`,
      );

  React.useEffect(() => {
    (async () => {
      const canvas = await QRCode.toCanvas(url);
      const qrCodeUrl = canvas.toDataURL();
      const barInfo = await api.getBarInfo();
      const qrText = [barInfo.infoA, barInfo.infoB, barInfo.infoC];
      setQrCodeInfo({
        url: qrCodeUrl,
        text: qrText,
      });
    })();
  }, []);

  return (
    <QrCodeComponent
      qrCodeUrl={qrCodeInfo.url}
      text={qrCodeInfo.text}
      onDownloadPdf={generatePdf}
      onDownloadImage={generateImage}
    />
  );
};
