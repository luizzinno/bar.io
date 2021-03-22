import React from 'react';
import { CenteredLayout } from 'layouts';
import { ProductListContainer } from 'pods/product-list';

export const ProductListScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <ProductListContainer />
      </CenteredLayout>
    </>
  );
};
