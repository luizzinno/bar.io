import React from 'react';
import { AppLayout } from 'layouts';
import { ProductPortionTypesContainer } from 'pods/product-portion-types';

export const ProductPortionTypesScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <ProductPortionTypesContainer />
      </AppLayout>
    </>
  );
};
