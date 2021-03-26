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
import * as classes from './product-portion-types.styles';

interface Props {
  items: ListItem[];
  editItemId: string;
  isAdding: boolean;
  onSave: (value: string, id?: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (start: number, end: number) => void;
  onCancel: () => void;
  onAdd: () => void;
}

export const ProductPortionTypesComponent: React.FunctionComponent<Props> = (props) => {
  const {
    items,
    editItemId,
    isAdding,
    onSave,
    onEdit,
    onDelete,
    onReorder,
    onCancel,
    onAdd,
  } = props;
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
          isAdding={isAdding}
          items={items}
          itemTypeName='raciones'
          editItemId={editItemId}
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
