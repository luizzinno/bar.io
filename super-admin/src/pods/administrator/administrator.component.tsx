import React from 'react';

//Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { TabsPanel } from 'common/components';

//CSS
import * as classes from 'common/styles/modules.styles';

//Router
import { switchRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';
import { AdministratorInfoComponent, ResetPassword } from './components';
import { AdministratorInfo } from './administrator-info.vm';
import { Credential } from './components/reset-password/credential.vm';

interface Props {
  administratorInfo: AdministratorInfo;
  onEdit: (restaurantInfo: AdministratorInfo) => void;
  onDelete: (id: string) => void;
  onResetPassword: (id: string, password: Credential) => void;
}

export const AdministratorComponent: React.FunctionComponent<Props> = (props) => {
  const { administratorInfo, onEdit, onDelete, onResetPassword } = props;
  const { container, icon } = classes;
  const history = useHistory();

  return (
    <Card className={container}>
      <CardHeader
        component='h1'
        title='Administradores'
        action={
          <IconButton
            color='primary'
            aria-label='back home'
            className={icon}
            onClick={() => history.push(switchRoutes.selectionModule)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        }
      />
      <CardContent>
        <TabsPanel
          namesTabs={['Datos', 'Resetear Clave']}
          scenesTabs={[
            <AdministratorInfoComponent
              info={administratorInfo}
              onDelete={onDelete}
              onEdit={onEdit}
            />,
            <ResetPassword
              onCancel={() => {}}
              id={administratorInfo.id}
              onResetPassword={onResetPassword}
            />,
          ]}
        />
      </CardContent>
    </Card>
  );
};
