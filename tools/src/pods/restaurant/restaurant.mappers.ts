import * as model from 'dals';
import * as apiModel from './restaurant.api-model';
import { mapToCollection } from 'common/mappers';

export const reduceCategoryEntryListToRationDefinitionList = (
  category: apiModel.CategoryEntry[]
): model.RationDefinition[] => {
  if (Array.isArray(category)) {
    const rations = category
      .map((category: apiModel.CategoryEntry) => category.items)
      .reduce(
        (acc: apiModel.Item[], item: apiModel.Item[]) => [...acc, ...item],
        []
      )
      .filter((item: apiModel.Item) => item.priceByRation)
      .reduce((acc, item: apiModel.Item) => {
        if (!acc[item.priceByRation.rationName]) {
          return {
            ...acc,
            [item.priceByRation.rationName]:
              item.priceByRation.rationsTypes.map(
                (rationType: apiModel.RationType) => rationType.unit
              ),
          };
        } else {
          return {
            ...acc,
            [item.priceByRation.rationName]: [
              ...new Set([
                ...acc[item.priceByRation.rationName],
                ...item.priceByRation.rationsTypes.map(
                  (rationType: apiModel.RationType) => rationType.unit
                ),
              ]),
            ],
          };
        }
      }, {});

    return Object.keys(rations).reduce((acc, key) => {
      return [...acc, { name: key, units: rations[key] }];
    }, []);
  } else return [];
};

const mapListFromRationTypeApiToRationTypeMode = (
  rationType: apiModel.RationType[]
): model.RationType[] =>
  mapToCollection(rationType, mapFromRationTypeApiToRationTypeMode);

const mapFromRationTypeApiToRationTypeMode = (
  rationType: apiModel.RationType
): model.RationType => ({
  unit: rationType.unit,
  price: rationType.price,
});

const mapFromPriceByRationToSubItemPrice = (
  priceByRation: apiModel.PriceByRation
): model.SubItemPrice => ({
  rationName: priceByRation.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeMode(priceByRation.rationsTypes),
});

const mapListFromItemApiToItemModel = (item: apiModel.Item[]): model.Item[] =>
  mapToCollection(item, mapFromItemApiToItemModel);

const mapFromItemApiToItemModel = (item: apiModel.Item): model.Item => ({
  name: item.name,
  description: item.description,
  price: item.price ? item.price : null,
  priceByRation: item.priceByRation
    ? mapFromPriceByRationToSubItemPrice(item.priceByRation)
    : null,
  unit: item.unit ? item.unit : null,
});

const mapListFromCategoryEntryToItemsByCategory = (
  category: apiModel.CategoryEntry[]
): model.ItemsByCategory[] =>
  mapToCollection(category, mapFromCategoryEntryToItemsByCategory);

const mapFromCategoryEntryToItemsByCategory = (
  category: apiModel.CategoryEntry
): model.ItemsByCategory => {
  return {
    categoryName: category.name,
    items: mapListFromItemApiToItemModel(category.items),
  };
};

export const mapRestaurantFromApiToModel = (
  restaurant: apiModel.RestaurantInfo
): model.Restaurant => ({
  _id: restaurant._id,
  name: restaurant.name,
  urlName: restaurant.urlName,
  phone: restaurant.phone,
  address: restaurant.address,
  locationUrl: restaurant.locationUrl,
  menuDate: restaurant.menuDate,
  communitySourceUrl: restaurant.communitySourceUrl,
  description: restaurant.description,
  theme: restaurant.theme,
  rationsDefinitions: reduceCategoryEntryListToRationDefinitionList(
    restaurant.menu
  ),
  menu: mapListFromCategoryEntryToItemsByCategory(restaurant.menu),
  official: restaurant.official,
});
