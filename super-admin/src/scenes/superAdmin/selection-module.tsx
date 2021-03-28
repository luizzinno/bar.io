import React from 'react';
import { AppLayout } from 'layouts';
import { SelectionModule } from 'pods/selection-module';

export const SelectionModuleScene: React.FunctionComponent = () => {
  return (
    <>
      <AppLayout>
        <SelectionModule />
      </AppLayout>
    </>
  );
};
