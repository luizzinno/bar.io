import React from 'react';
import { AppLayout } from 'layouts';
import { EditProductContainer } from 'pods/edit-product/edit-product.container';

export const EditProductScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <EditProductContainer />
      </AppLayout>
    </>
  );
};
