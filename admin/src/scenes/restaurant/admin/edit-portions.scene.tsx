import React, { FC } from 'react';
import { AppLayout } from 'layouts';
import { EditPortionsContainer } from 'pods/edit-portions';

export const EditPortionsScene: FC = () => {
  return (
    <>
      <AppLayout>
        <EditPortionsContainer />
      </AppLayout>
    </>
  );
};
