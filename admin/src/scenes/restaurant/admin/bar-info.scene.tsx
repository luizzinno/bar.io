import React, { FC } from 'react';
import { AppLayout } from 'layouts';
import { BarInfoContainer } from 'pods/bar-info';

export const BarInfoScene: FC = () => {
  return (
    <>
      <AppLayout>
        <BarInfoContainer />
      </AppLayout>
    </>
  );
};
