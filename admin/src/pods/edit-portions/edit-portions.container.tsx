import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SortableListComponent, ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import * as classes from './edit-portions.styles';
import { mapProductPortionsToListItems } from './edit-portions.mapper';
import {
  deleteProductPortion,
  getProductPortionTypeById,
  ProductPortion,
  saveProductPortion,
  saveProductPortionType,
} from 'core/api';
import { useHistory, useParams } from 'react-router-dom';
import { switchRoutes } from 'core/router';

interface Params {
  typeId: string;
}

export const EditPortionsContainer: React.FunctionComponent = () => {
  const [productPortions, setProductPortions] = React.useState<Array<ProductPortion>>([]);
  const [listItems, setListItems] = React.useState<Array<ListItem>>([]);
  const [editProductPortionId, setEditProductPortionId] = React.useState<number | false>(false);
  const [productPortionType, setProductPortionType] = React.useState<string>('');
  const { typeId } = useParams<Params>();
  const history = useHistory();

  const getProductPortionType = async () => {
    const productPortionType = await getProductPortionTypeById(+typeId);
    setProductPortionType(productPortionType.name);
    setProductPortions(productPortionType.portions);
    setListItems(mapProductPortionsToListItems(productPortionType.portions));
  };

  React.useEffect(() => {
    async function loadProductPortions() {
      await getProductPortionType();
    }
    loadProductPortions();
  }, []);

  const onReorder = async (startIndex, endIndex) => {
    const reorderedPortions = reorder(productPortions, startIndex, endIndex);
    setProductPortions(reorderedPortions);
    await saveProductPortionType(+typeId, reorderedPortions);
  };

  const onSave = (name: string, id?: number) => {
    setEditProductPortionId(false);
    (async () => await saveProductPortion(name, +typeId, id))();
    (async () => await getProductPortionType())();
  };

  const onEdit = (id: number) => setEditProductPortionId(id);
  const onDelete = (id: number) => {
    (async () => await deleteProductPortion(+typeId, id))();
    (async () => await getProductPortionType())();
  };

  const onCancel = () => setEditProductPortionId(false);
  const onAdd = () => setEditProductPortionId(0);

  return (
    <Card className={classes.container}>
      <CardHeader
        component='h1'
        title={`Editar ${productPortionType}`}
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
          items={listItems}
          itemTypeName={`${productPortionType}`}
          editItemId={editProductPortionId}
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
