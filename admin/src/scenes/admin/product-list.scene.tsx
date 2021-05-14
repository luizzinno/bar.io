import React from 'react';
import { AppLayout } from 'layouts';
import { ProductListContainer } from 'pods/product-list';

export const ProductListScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <ProductListContainer />
      </AppLayout>
    </>
  );
};
