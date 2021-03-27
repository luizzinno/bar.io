import React from 'react';
import { AppLayout } from 'layouts';
import { AdministratorListContainer } from 'pods/administrator-list';

export const AdministratorListScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <AdministratorListContainer />
      </AppLayout>
    </>
  );
};
