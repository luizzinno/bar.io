import { AdministratorEntityApi } from './administrator-list.api-model';
import { mockAdministratorList } from './administrator-list.api-mock';

let administratorList = [...mockAdministratorList];

export const getAdministratorList = (): Promise<AdministratorEntityApi[]> => {
  return Promise.resolve(administratorList);
};

export const deleteAdministrator = (id: string): Promise<boolean> => {
  administratorList = administratorList.filter((administrator) => administrator.id !== id);
  return Promise.resolve(true);
};
