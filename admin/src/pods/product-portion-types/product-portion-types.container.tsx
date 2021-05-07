import React from 'react';
import { mapProductPortionTypeListFromApiModelToListItem } from './product-portion-types.mapper';
import { reorder } from 'common/utils/array';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import {
  deleteProductPortionType,
  getProductPortionTypes,
  saveProductPortionType,
  saveProductPortionTypes,
} from 'core/api';
import { ListItem } from 'common/components';
import { ProductPortionTypesComponent } from './product-portion-types.component';

export const ProductPortionTypesContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [items, setItems] = React.useState<ListItem[]>([]);
  const [isAdding, setAdding] = React.useState<boolean>(false);
  const [selectedProductPortionTypeId, setSelectedProductPortionTypeId] = React.useState<string>(
    '',
  );

  React.useEffect(() => {
    onLoadProductPortionTypes();
  }, []);

  const onLoadProductPortionTypes = async () => {
    const productPortionTypes = await getProductPortionTypes();
    setItems(mapProductPortionTypeListFromApiModelToListItem(productPortionTypes));
  };

  const handleReorder = async (startIndex: number, endIndex: number) => {
    const types = await getProductPortionTypes();
    const reorderedTypes = reorder(types, startIndex, endIndex);
    await saveProductPortionTypes(reorderedTypes);
    await reloadTypes();
  };

  const handleSave = async (name: string, id?: string) => {
    await saveProductPortionType({ id: id, name: name });
    setAdding(false);
    setSelectedProductPortionTypeId('');
    await reloadTypes();
  };

  const handleDelete = async (id: string) => {
    await deleteProductPortionType(id);
    setSelectedProductPortionTypeId('');
    await reloadTypes();
  };

  const handleEdit = (id: string) => {
    history.push(routes.editPortions(id.toString()));
  };

  const handleCancel = () => setSelectedProductPortionTypeId('');
  const handleAdd = () => {
    setSelectedProductPortionTypeId('');
    setAdding(true);
  };

  const reloadTypes = async () => {
    const types = await getProductPortionTypes();
    setItems(mapProductPortionTypeListFromApiModelToListItem(types));
  };

  return (
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
  );
};
