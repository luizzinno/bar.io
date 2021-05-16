import React from 'react';
import { mapProductPortionTypeListFromApiModelToListItem } from './product-portion-types.mapper';
import { reorder } from 'common/utils/array';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import {
  deleteProductPortionType,
  getProductPortionTypes,
  ProductPortionType,
  saveProductPortionType,
  saveProductPortionTypes,
} from 'core/api';
import { ListItem } from 'common/components';
import { ProductPortionTypesComponent } from './product-portion-types.component';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';

export const ProductPortionTypesContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [items, setItems] = React.useState<ListItem[]>([]);
  const [isAdding, setAdding] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(null);
  const [selectedProductPortionTypeId, setSelectedProductPortionTypeId] = React.useState<string>(
    '',
  );

  React.useEffect(() => {
    onLoadProductPortionTypes();
  }, []);

  const getTypes = async (): Promise<ProductPortionType[]> => {
    try {
      return await getProductPortionTypes();
    } catch (error) {
      setError('Error retrieving portion types');
    }
  };

  const onLoadProductPortionTypes = async () => {
    const productPortionTypes = await getTypes();
    setItems(mapProductPortionTypeListFromApiModelToListItem(productPortionTypes));
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  const handleReorder = async (startIndex: number, endIndex: number) => {
    const types = await getTypes();
    const reorderedTypes = reorder(types, startIndex, endIndex);

    try {
      await saveProductPortionTypes(reorderedTypes);
    } catch (error) {
      setError('Error saving portion types');
    }

    await reloadTypes();
  };

  const handleSave = async (name: string, id?: string) => {
    try {
      await saveProductPortionType({ id: id, name: name });
    } catch (error) {
      setError('Error saving portion type');
    }

    setAdding(false);
    setSelectedProductPortionTypeId('');
    await reloadTypes();
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProductPortionType(id);
    } catch (error) {
      setError('Error deleting portion type');
    }

    setSelectedProductPortionTypeId('');
    await reloadTypes();
  };

  const handleEdit = (id: string) => {
    history.push(routes.editPortions(id.toString()));
  };

  const handleCancel = () => {
    setSelectedProductPortionTypeId('');
    setAdding(false);
  };

  const handleAdd = () => {
    setSelectedProductPortionTypeId('');
    setAdding(true);
  };

  const reloadTypes = async () => {
    const types = await getProductPortionTypes();
    setItems(mapProductPortionTypeListFromApiModelToListItem(types));
  };

  return (
    <>
      <ProductPortionTypesComponent
        isAdding={isAdding}
        items={items}
        editItemId={selectedProductPortionTypeId}
        onSave={handleSave}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCancel={handleCancel}
        onAdd={handleAdd}
        onReorder={handleReorder}
      />
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
