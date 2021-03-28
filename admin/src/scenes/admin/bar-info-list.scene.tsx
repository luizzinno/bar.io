import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { BarInfoListContainer } from 'pods/bar-info';

export const BarInfoListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <BarInfoListContainer />
      </CenteredLayout>
    </>
  );
};
