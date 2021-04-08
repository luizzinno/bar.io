import React from 'react';
import { CenteredLayout } from 'layouts';
import { SelectionModuleContainer } from 'pods/selection-module';

export const SelectionModuleScene: React.FunctionComponent = () => {
  return (
    <>
      <CenteredLayout>
        <SelectionModuleContainer />
      </CenteredLayout>
    </>
  );
};
