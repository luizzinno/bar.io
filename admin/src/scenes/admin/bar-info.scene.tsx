import React from 'react';
import { AppLayout } from 'layouts';
import { BarInfoContainer } from 'pods/bar-info';

export const BarInfoScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <BarInfoContainer />
      </AppLayout>
    </>
  );
};
