import React, { FC } from 'react';
import { AppLayout } from 'layouts';
import { EditProductContainer } from 'pods/edit-product/edit-product.container';

export const EditProductScene: FC = () => {
  return (
    <>
      <AppLayout>
        <EditProductContainer />
      </AppLayout>
    </>
  );
};
