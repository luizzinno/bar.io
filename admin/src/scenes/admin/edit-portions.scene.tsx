import React from 'react';
import { AppLayout } from 'layouts';
import { EditPortionsContainer } from 'pods/edit-portions';

export const EditPortionsScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <EditPortionsContainer />
      </AppLayout>
    </>
  );
};
