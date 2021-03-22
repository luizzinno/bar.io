import React from 'react';
import { CenteredLayout } from 'layouts';
import { ProductPortionTypesContainer } from 'pods/product-portion-types';

export const ProductPortionTypesScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <ProductPortionTypesContainer />
      </CenteredLayout>
    </>
  );
};
