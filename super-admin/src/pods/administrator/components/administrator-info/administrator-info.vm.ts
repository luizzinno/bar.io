export interface AdministratorInfo {
  id: string;
  name: string;
  email: string;
  numberPhone: string;
  initialPassword: string;
}

export const createEmptyAdministratorInfo = (): AdministratorInfo => ({
  id: '',
  name: '',
  email: '',
  numberPhone: '',
  initialPassword: '',
});
