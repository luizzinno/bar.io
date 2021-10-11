//VM Api
import { AdministratorInfo } from './administrator.api-model';
import { Credential } from './credential.api-model';

//Mock
import { mockAdministartorInfo } from './administrator.mock.data';

export const getAdministratiorInfo = async (id: string): Promise<AdministratorInfo> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockAdministartorInfo);
    }, 500);
  });

export const updateAdministratorInfo = async (administratorInfo: AdministratorInfo): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });

export const deleteAdministratorInfo = async (id: string): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });

export const resetPasswordAdministratorInfo = async (
  id: string,
  newPassword: Credential,
): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(true);
    }, 500);
  });
