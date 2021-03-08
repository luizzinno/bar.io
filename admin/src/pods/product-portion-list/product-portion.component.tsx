import React from 'react';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//Components
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';

//Router
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';

//CSS
import * as classes from './product-portion-list.styles';


interface Props {
  listItem: ListItem[];
  editID: number | false;
  onSave: (value: string, id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onReorder: (start: number, end: number) => void;
  onCancel: () => void;
  onAdd: () => void;
}

export const ProductPortionListComponent: React.FunctionComponent<Props> = (props) => {
  const { listItem, editID, onSave, onEdit, onDelete, onReorder, onCancel, onAdd } = props;
  const history = useHistory();
  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title='Raciones'
        action={
          <IconButton
            color='primary'
            aria-label='back home'
            className={classes.icon}
            onClick={() => history.push(switchRoutes.dashboard)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        }
      />
      <CardContent>
        <SortableListComponent
          items={listItem}
          itemTypeName='raciones'
          editItemId={editID}
          onSave={onSave}
          onEdit={onEdit}
          onDelete={onDelete}
          onReorder={onReorder}
          onCancel={onCancel}
          onAdd={onAdd}
        />
      </CardContent>
    </Card>
  );
};
