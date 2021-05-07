import { createEmptyListItem, ListItem } from 'common/components';
import { createEmptyProductPortionType, ProductPortion, ProductPortionType, } from 'core/api/product-portions/product-portions.model';

export const mapProductPortionTypeListFromApiModelToListItem = (
  productPortionTypes: ProductPortionType[],
): ListItem[] =>
  !!productPortionTypes
    ? productPortionTypes.map((e) => mapProductPortionTypeFromApiModelToListItem(e))
    : [];

export const mapProductPortionTypeFromApiModelToListItem = (
  productPortionType: ProductPortionType,
): ListItem =>
  !!productPortionType
    ? { id: productPortionType.id, value: productPortionType.name }
    : createEmptyListItem();
