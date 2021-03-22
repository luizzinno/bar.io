import { Card, CardContent, CardHeader } from '@material-ui/core';
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import React from 'react';
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
import { useParams } from 'react-router-dom';

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
  const { typeId } = useParams<Params>();

  const getProductPortionType = async () => {
    const productPortionType = await getProductPortionTypeById(typeId);
    setProductPortionType(productPortionType);
    setListItems(mapProductPortionListFromApiModelToListItem(productPortionType.portions));
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
    await saveProductPortionType({ ...productPortionType, portions: reorderedPortions });
    await getProductPortionType();
  };

  const onSave = async (name: string, id?: string) => {
    setAdding(false);
    setEditedProductPortionId('');
    await saveProductPortion({ id: id, name: name }, productPortionType.id);
    await getProductPortionType();
  };

  const onEdit = (id: string) => setEditedProductPortionId(id);
  const onDelete = async (id: string) => {
    await deleteProductPortion(id);
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

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader component='h1' title={`Editar ${productPortionType.name}`} />
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
    </div>
  );
};
