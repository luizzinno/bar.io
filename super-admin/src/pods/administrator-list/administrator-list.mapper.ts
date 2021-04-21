import * as apiModel from './api/administrator-list.api-model';
import * as viewModel from './administrator-list.vm';

export const mapAdministratorListFromApiToVm = (
  administrators: apiModel.AdministratorEntityApi[],
): viewModel.AdministratorEntityVm[] => {
  return administrators.map((administrator) => mapAdministratorFromApiToVm(administrator));
};

const mapAdministratorFromApiToVm = (
  administrator: apiModel.AdministratorEntityApi,
): viewModel.AdministratorEntityVm => ({
  id: administrator.id,
  name: administrator.name,
  email: administrator.email,
});
