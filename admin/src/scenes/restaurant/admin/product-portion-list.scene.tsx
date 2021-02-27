import React, { FC } from 'react';
import { AppLayout } from 'layouts';
import { ProductPortionListContainer } from 'pods/product-portion-list';

export const ProductPortionListScene: FC = () => {
  return (
    <>
      <AppLayout>
        <ProductPortionListContainer />
      </AppLayout>
    </>
  );
};
