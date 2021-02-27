import React, { FC } from 'react';
import { AppLayout } from 'layouts';
import { ProductListContainer } from 'pods/product-list';

export const ProductListScene: FC = () => {
  return (
    <>
      <AppLayout>
        <ProductListContainer />
      </AppLayout>
    </>
  );
};
