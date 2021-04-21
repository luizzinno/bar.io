import React from 'react';
import { AdministratorListComponent } from './administrator-list.component';
import { administratorList } from './administrator-list.hook';
import { deleteAdministrator } from './api';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

const headers = ['Nombre', 'Email', 'Actions'];

export const AdministratorListContainer: React.FunctionComponent = () => {
  const {
    administratorListCollection,
    handleloadAdministratorList,
    setAdministratorListCollection,
  } = administratorList();

  const history = useHistory();

  React.useEffect(() => {
    handleloadAdministratorList();
  }, []);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editAdministrator(id));
  };

  const handleDelete = async (id: string) => {
    await deleteAdministrator(id);
    handleloadAdministratorList();
  };

  return (
    <AdministratorListComponent
      headers={headers}
      administratorListCollection={administratorListCollection}
      setAdministratorListCollection={setAdministratorListCollection}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
