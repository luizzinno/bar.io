import React from 'react';
import { CenteredLayout } from 'layouts';
import { MenuContainer } from 'pods/menu';

export const DashboardScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <MenuContainer />
      </CenteredLayout>
    </>
  );
};
