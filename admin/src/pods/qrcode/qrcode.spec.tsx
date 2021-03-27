import React from 'react';
import { render, screen } from '@testing-library/react';
import { QrCodeComponent } from './qrcode.component';
import userEvent from '@testing-library/user-event';

describe('QrCodeComponent tests', () => {
  it('should render the qrcode the text and ther download buttons when passing valid parameters', () => {
    //Arrange
    const props = {
      qrCodeUrl: 'qrcode://url',
      text: ['Line A', 'Line B', 'Line C'],
      onDownloadImage: () => {},
      onDownloadPdf: () => {},
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const qr = screen.getByRole('img');
    const textA = screen.getByText(props.text[0]);
    const textB = screen.getByText(props.text[1]);
    const textC = screen.getByText(props.text[2]);
    const buttons = screen.getAllByRole('button');

    //Assert
    expect(qr).toBeInTheDocument();
    expect((qr as HTMLImageElement).src).toStrictEqual(props.qrCodeUrl);
    expect(textA).toBeInTheDocument();
    expect(textB).toBeInTheDocument();
    expect(textC).toBeInTheDocument();
    expect(buttons.length).toBe(3);
  });
  it('should not render the qrcode neither the buttons when passing an empty url', () => {
    //Arrange
    const props = {
      qrCodeUrl: '',
      text: [],
      onDownloadImage: () => {},
      onDownloadPdf: () => {},
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const qr = screen.queryByRole('img');
    const buttons = screen.queryAllByRole('button');

    //Assert
    expect(qr).not.toBeInTheDocument();
    expect(buttons.length).toBe(1);
  });
  it('should not render the qrcode when passing a null url', () => {
    //Arrange
    const props = {
      qrCodeUrl: null,
      text: [],
      onDownloadImage: () => {},
      onDownloadPdf: () => {},
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const qr = screen.queryByRole('img');
    const buttons = screen.queryAllByRole('button');

    //Assert
    expect(qr).not.toBeInTheDocument();
    expect(buttons.length).toBe(1);
  });
  it('should not render the qrcode when passing an undefined url', () => {
    //Arrange
    const props = {
      qrCodeUrl: undefined,
      text: [],
      onDownloadImage: () => {},
      onDownloadPdf: () => {},
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const qr = screen.queryByRole('img');
    const buttons = screen.queryAllByRole('button');

    //Assert
    expect(qr).not.toBeInTheDocument();
    expect(buttons.length).toBe(1);
  });
  it('should call onDownloadImage when clicking the download image button', () => {
    //Arrange
    const props = {
      qrCodeUrl: 'qrcode://url',
      text: ['Line A', 'Line B', 'Line C'],
      onDownloadImage: jest.fn(),
      onDownloadPdf: () => {},
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const downloadImageButton = screen.getAllByRole('button')[1];
    userEvent.click(downloadImageButton);

    //Assert
    expect(props.onDownloadImage).toHaveBeenCalled();
  });
  it('should call onDownloadPdf when clicking the download pdf button', () => {
    //Arrange
    const props = {
      qrCodeUrl: 'qrcode://url',
      text: ['Line A', 'Line B', 'Line C'],
      onDownloadImage: () => {},
      onDownloadPdf: jest.fn(),
    };

    //Act
    render(<QrCodeComponent {...props} />);
    const downloadPdfButton = screen.getAllByRole('button')[2];
    userEvent.click(downloadPdfButton);

    //Assert
    expect(props.onDownloadPdf).toHaveBeenCalled();
  });
});
