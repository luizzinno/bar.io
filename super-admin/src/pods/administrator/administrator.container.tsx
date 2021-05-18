import React from 'react';
import { AdministratorComponent } from './administrator.component';

import { useParams } from 'react-router-dom';

//Api
import * as api from './api';
import { createEmptyAdministratorInfo, AdministratorInfo } from './administrator-info.vm';
import { Credential } from './components/reset-password/credential.vm';

interface Params {
  id: string;
}

export const AdministratorContainer: React.FunctionComponent = () => {
  const { id } = useParams<Params>();

  const [administratorInfo, setAdministratorInfo] = React.useState<AdministratorInfo>(
    createEmptyAdministratorInfo(),
  );

  React.useEffect(() => {
    onLoadAdministratorInfo(id);
  }, []);

  const onLoadAdministratorInfo = async (id: string) => {
    api
      .getAdministratiorInfo(id)
      .then((result) => {
        //Mock....
        setAdministratorInfo(result);
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load Administrator info');
      });
  };

  const handleEdit = (administratorInfo: AdministratorInfo) => {
    api
      .updateAdministratorInfo(administratorInfo)
      .then((result) => {
        // Snackbar error
        alert('Updated Administration info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to update Administration info');
      });
  };

  const handleDelete = (id: string) => {
    api
      .deleteAdministratorInfo(id)
      .then((result) => {
        // Snackbar error
        alert('Delete Administrator info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to delete Administrator info');
      });
  };

  const handleReset = (id: string, password: Credential) => {
    api
      .resetPasswordAdministratorInfo(id, password)
      .then((result) => {
        // Snackbar error
        alert('Reset Password Administrator info');
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to reset password Administrator info');
      });
  };
  return (
    <AdministratorComponent 
      administratorInfo={administratorInfo} 
      onEdit={handleEdit}
      onDelete={handleDelete}
      onResetPassworld={handleReset}
      />
      );
};
