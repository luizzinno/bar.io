import * as React from 'react';
import { AdministratorEntityVm } from './administrator-list.vm';
import { getAdministratorList } from './api';
import { mapAdministratorListFromApiToVm } from './administrator-list.mapper';

export const administratorListHook = () => {
  const [administratorList, setAdministratorList] = React.useState<AdministratorEntityVm[]>([]);

  const handleloadAdministratorList = () => {
    getAdministratorList()
      .then((administratorList) => {
        const administrationListVm = mapAdministratorListFromApiToVm(administratorList);
        setAdministratorList(administrationListVm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    administratorList,
    handleloadAdministratorList,
    setAdministratorList,
  };
};
