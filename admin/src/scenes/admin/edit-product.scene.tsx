import React from 'react';
import { CenteredLayout } from 'layouts';
import { EditProductContainer } from 'pods/edit-product/edit-product.container';

export const EditProductScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <EditProductContainer />
      </CenteredLayout>
    </>
  );
};
