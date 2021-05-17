import { AdministratorEntityApi } from './administrator-list.api-model';
import { mockAdministratorList } from './administrator-list.api-mock';

let administratorList = [...mockAdministratorList];

export const getAdministratorList = async (): Promise<AdministratorEntityApi[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(administratorList);
    }, 500);
  });
};

export const deleteAdministrator = async (row: AdministratorEntityApi): Promise<boolean> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      administratorList.splice(administratorList.indexOf(row), 1);
      resolve(true);
    }, 500);
  });
};
