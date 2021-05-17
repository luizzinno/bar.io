import * as React from 'react';
import { AdministratorEntityVm } from './administrator-list.vm';
import { getAdministratorList } from './api';
import { mapAdministratorListFromApiToVm } from './administrator-list.mapper';

export const administratorList = () => {
  const [administratorListCollection, setAdministratorListCollection] = React.useState<
    AdministratorEntityVm[]
  >([]);

  const handleloadAdministratorList = () => {
    getAdministratorList()
      .then((administratorList) => {
        const administrationListVm = mapAdministratorListFromApiToVm(administratorList);
        setAdministratorListCollection(administrationListVm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    administratorListCollection,
    handleloadAdministratorList,
    setAdministratorListCollection,
  };
};
