import React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteAdministrator } from './api';
import { administratorList } from './administrator-list.hook';
import { AdministratorListComponent } from './administrator-list.component';
import * as viewModel from './administrator-list.vm';

const headers = ['Nombre', 'Email', 'Teléfono', 'Acciones'];

export const AdministratorListContainer: React.FunctionComponent = () => {
  const { administratorListCollection, handleloadAdministratorList } = administratorList();

  const history = useHistory();

  React.useEffect(() => {
    handleloadAdministratorList();
  }, []);

  const handleCreateAdministrator = () => {
    history.push(linkRoutes.createAdministrator);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editAdministrator(id));
  };

  const handleDelete = async (row: viewModel.AdministratorEntityVm) => {
    await deleteAdministrator(row);
    handleloadAdministratorList();
  };

  return (
    <AdministratorListComponent
      headers={headers}
      administratorListCollection={administratorListCollection}
      onCreateAdministrator={handleCreateAdministrator}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
