import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SortableListComponent, ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import * as classes from './edit-portions.styles';
import { mapProductPortionListFromApiModelToListItem } from './edit-portions.mapper';
import {
  createEmptyProductPortionType,
  deleteProductPortion,
  getProductPortionTypeById,
  ProductPortionType,
  saveProductPortion,
  saveProductPortionType,
} from 'core/api';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';
import { useHistory, useParams } from 'react-router-dom';

interface Params {
  typeId: string;
}

export const EditPortionsContainer: React.FunctionComponent = () => {
  const [listItems, setListItems] = React.useState<ListItem[]>([]);
  const [productPortionType, setProductPortionType] = React.useState<ProductPortionType>(
    createEmptyProductPortionType(),
  );
  const [editedProductPortionId, setEditedProductPortionId] = React.useState<string>('');
  const [isAdding, setAdding] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(null);
  const { typeId } = useParams<Params>();
  const history = useHistory();

  const getProductPortionType = async () => {
    try {
      const productPortionType = await getProductPortionTypeById(typeId);
      setProductPortionType(productPortionType);
      setListItems(mapProductPortionListFromApiModelToListItem(productPortionType.portions));
    } catch (error) {
      setError('Error retrieving portion type');
    }
  };

  React.useEffect(() => {
    async function loadProductPortionType() {
      await getProductPortionType();
    }
    loadProductPortionType();
  }, []);

  const onReorder = async (startIndex, endIndex) => {
    const productPortions = productPortionType.portions;
    const reorderedPortions = reorder(productPortions, startIndex, endIndex);
    try {
      await saveProductPortionType({ ...productPortionType, portions: reorderedPortions });
    } catch (error) {
      setError('Error saving portion type');
    }

    await getProductPortionType();
  };

  const onSave = async (name: string, id?: string) => {
    setAdding(false);
    setEditedProductPortionId('');

    try {
      await saveProductPortion({ id: id, name: name }, productPortionType.id);
    } catch (error) {
      setError('Error saving portion');
    }

    await getProductPortionType();
  };

  const onEdit = (id: string) => setEditedProductPortionId(id);
  const onDelete = async (id: string) => {
    try {
      await deleteProductPortion(id);
    } catch (error) {
      setError('Error deleting portion');
    }

    await getProductPortionType();
  };

  const onCancel = () => {
    setAdding(false);
    setEditedProductPortionId('');
  };
  const onAdd = () => {
    setAdding(true);
    setEditedProductPortionId('');
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  return (
    <>
      <Card className={classes.container}>
        <CardHeader
          component='h1'
          title={`Editar ${productPortionType.name}`}
          action={
            <IconButton
              color='primary'
              aria-label='back home'
              className={classes.icon}
              onClick={() => history.goBack()}>
              <ArrowBackIcon fontSize='large' />
            </IconButton>
          }
        />
        <CardContent>
          <SortableListComponent
            isAdding={isAdding}
            items={listItems}
            itemTypeName={`${productPortionType.name}`}
            editItemId={editedProductPortionId}
            onSave={onSave}
            onEdit={onEdit}
            onDelete={onDelete}
            onReorder={onReorder}
            onCancel={onCancel}
            onAdd={onAdd}
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
