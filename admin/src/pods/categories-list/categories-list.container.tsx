import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { ListItem, SortableListComponent } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import {
  deleteMenuCategory,
  getMenuCategories,
  MenuCategory,
  saveMenuCategories,
  saveMenuCategory,
} from 'core/api';
import { mapMenuCategorieListFromApiModelToListItem } from './categories-list.mapper';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';
import * as classes from './categories-list.styles';

export const CategoriesListContainer: React.FunctionComponent = () => {
  const [categories, setCategories] = React.useState<MenuCategory[]>([]);
  const [listItems, setListItems] = React.useState<ListItem[]>([]);
  const [editCategoryId, setEditCategoryId] = React.useState<string>('');
  const [isAdding, setIsAdding] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(null);
  const history = useHistory();

  const getCategories = async (): Promise<void> => {
    try {
      const menuCategories = await getMenuCategories();
      setCategories(menuCategories);
      setListItems(mapMenuCategorieListFromApiModelToListItem(menuCategories));
    } catch (error) {
      setError('Error retrieving categories');
    }
  };

  React.useEffect(() => {
    async function loadCategories() {
      await getCategories();
    }
    loadCategories();
  }, []);

  const onReorder = async (startIndex, endIndex) => {
    const reorderedCategories = reorder(categories, startIndex, endIndex);
    setCategories(reorderedCategories);
    setListItems(mapMenuCategorieListFromApiModelToListItem(reorderedCategories));

    try {
      await saveMenuCategories(reorderedCategories);
    } catch (error) {
      setError('Error saving categories');
    }
  };

  const onSave = async (name: string, id?: string) => {
    setEditCategoryId('');
    setIsAdding(false);
    try {
      await saveMenuCategory(name, id);
    } catch (error) {
      setError('Error saving category');
    }

    await getCategories();
  };

  const onEdit = (id: string) => {
    setEditCategoryId(id);
    setIsAdding(false);
  };

  const onDelete = async (id: string) => {
    try {
      await deleteMenuCategory(id);
    } catch (error) {
      setError('Error deleting category');
    }

    try {
      await getCategories();
    } catch (error) {
      setError('Error retrieving categories');
    }
  };

  const onCancel = () => {
    setEditCategoryId('');
    setIsAdding(false);
  };

  const onAdd = () => {
    setEditCategoryId('');
    setIsAdding(true);
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  return (
    <>
      <Card className={classes.container}>
        <CardHeader
          component='h1'
          title='Categorías'
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
        <CardContent className={classes.content}>
          <SortableListComponent
            items={listItems}
            itemTypeName='categorías'
            editItemId={editCategoryId}
            onSave={onSave}
            onEdit={onEdit}
            onDelete={onDelete}
            onReorder={onReorder}
            onCancel={onCancel}
            onAdd={onAdd}
            isAdding={isAdding}
          />
        </CardContent>
      </Card>
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
