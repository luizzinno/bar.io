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
import { RestaurantInfoComponent, ResetPassword } from './components';
import { RestaurantInfo } from './restaurant-info.vm';

interface Props {
  restaurantsInfo: RestaurantInfo;
  onEdit: (restaurantInfo: RestaurantInfo) => void;
  onDelete: (id: string) => void;
}
export const EditRestaurantComponent: React.FunctionComponent<Props> = (props) => {
  const { restaurantsInfo, onEdit, onDelete } = props;
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
          scenesTabs={[
            <RestaurantInfoComponent info={restaurantsInfo} onDelete={onDelete} onEdit={onEdit} />,
            <ResetPassword onCancel={() => {}} onSave={() => {}} />,
          ]}
        />
      </CardContent>
    </Card>
  );
};
