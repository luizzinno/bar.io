import React, { FC } from 'react';

import { CenteredLayout } from 'layouts';
import { MenuContainer } from 'pods/menu';

export const MenuScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <MenuContainer />
      </CenteredLayout>
    </>
  );
};
