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
import { Link } from 'react-router-dom';
import { switchRoutes, linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';
import { RestaurantInfoComponent, ResetPassword } from './components';

export const EditRestaurantComponent: React.FunctionComponent = () => {
  const { container, icon } = classes;
  const history = useHistory();

  return (
    <Card className={container}>
      <CardHeader
        component='h1'
        title='Restaurantes'
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
          scenesTabs={[<RestaurantInfoComponent />, <ResetPassword />]}
        />
      </CardContent>
    </Card>
  );
};
