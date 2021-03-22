import React from 'react';
import { CenteredLayout } from 'layouts';
import { EditPortionsContainer } from 'pods/edit-portions';

export const EditPortionsScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <EditPortionsContainer />
      </CenteredLayout>
    </>
  );
};
