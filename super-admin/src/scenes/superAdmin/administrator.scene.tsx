import React from 'react';
import { AppLayout } from 'layouts';
import { AdministratorContainer } from 'pods/administrator';

export const AdministratorScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <AdministratorContainer />
      </AppLayout>
    </>
  );
};
