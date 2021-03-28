import { ProductPortion } from 'core/api';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { createEmptyListItem } from 'common/components/sortable-list/list-item.vm';

export const mapProductPortionListFromApiModelToListItem = (
  productPortions: ProductPortion[],
): ListItem[] =>
  !!productPortions ? productPortions.map((ps) => mapProductPortionFromApiModelToListItem(ps)) : [];

export const mapProductPortionFromApiModelToListItem = (productPortion: ProductPortion): ListItem =>
  !!productPortion ? { id: productPortion.id, value: productPortion.name } : createEmptyListItem();
