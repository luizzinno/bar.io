import React from 'react';
import { CenteredLayout } from 'layouts';
import { CategoriesListContainer } from 'pods/categories-list/categories-list.container';

export const CategoriesListScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <CategoriesListContainer />
      </CenteredLayout>
    </>
  );
};
