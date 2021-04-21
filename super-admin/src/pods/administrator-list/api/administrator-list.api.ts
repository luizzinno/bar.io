import { AdministratorEntityApi } from './administrator-list.api-model';
import { mockAdministratorList } from './administrator-list.api-mock';

let administratorList = [...mockAdministratorList];

export const getAdministratorList = async (): Promise<AdministratorEntityApi[]> => {
  return administratorList;
};

export const deleteAdministrator = async (id: string): Promise<boolean> => {
  administratorList = await administratorList.filter((administrator) => administrator.id !== id);
  return true;
};
