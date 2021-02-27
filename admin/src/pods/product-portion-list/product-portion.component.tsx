import React from 'react';
//Material ui
import { Card, CardContent, CardHeader, Button } from '@material-ui/core';

//Components
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';

//CSS
import * as classes from './product-portion-list.styles';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';

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
      <CardHeader component='h1' title='Raciones' />
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
      <Button
        variant='outlined'
        color='primary'
        onClick={() => history.push(switchRoutes.dashboard)}>
        Back to home
      </Button>
    </Card>
  );
};
