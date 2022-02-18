import { ObjectId } from 'mongodb';
import * as model from 'dals';
import * as apiModel from './restaurant.api-model';
import { mapToCollection } from 'common/mappers';

export const reduceCategoryEntryListToRationDefinitionList = (
  data: apiModel.CategoryEntry[]
) => {
  const rations = data
    .map((category) => category.items)
    .reduce((a, c) => [...a, ...c], [])
    .filter((x) => x.priceByRation)
    .reduce((a, c) => {
      if (!a[c.priceByRation.rationName]) {
        return {
          ...a,
          [c.priceByRation.rationName]: c.priceByRation.rationsTypes.map(
            (x) => x.unit
          ),
        };
      } else {
        return {
          ...a,
          [c.priceByRation.rationName]: [
            ...new Set([
              ...a[c.priceByRation.rationName],
              ...c.priceByRation.rationsTypes.map((x) => x.unit),
            ]),
          ],
        };
      }
    }, {});

  return Object.keys(rations).reduce((a, key) => {
    return [...a, { name: key, units: rations[key] }];
  }, []);
};

const mapListFromRationTypeApiToRationTypeMode = (
  data: apiModel.RationType[]
): model.RationType[] =>
  mapToCollection(data, mapFromRationTypeApiToRationTypeMode);

const mapFromRationTypeApiToRationTypeMode = (
  data: apiModel.RationType
): model.RationType => ({
  unit: data.unit,
  price: data.price,
});

const mapFromPriceByRationToSubItemPrice = (
  data: apiModel.PriceByRation
): model.SubItemPrice => ({
  rationName: data.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeMode(data.rationsTypes),
});

const mapListFromItemApiToItemModel = (data: apiModel.Item[]): model.Item[] =>
  mapToCollection(data, mapFromItemApiToItemModel);

const mapFromItemApiToItemModel = (data: apiModel.Item): model.Item => ({
  name: data.name,
  description: data.description,
  price: data.price ? data.price : null,
  priceByRation: data.priceByRation
    ? mapFromPriceByRationToSubItemPrice(data.priceByRation)
    : null,
  unit: data.unit ? data.unit : null,
});

const mapListFromCategoryEntryToItemsByCategory = (
  data: apiModel.CategoryEntry[]
): model.ItemsByCategory[] =>
  mapToCollection(data, mapFromCategoryEntryToItemsByCategory);

const mapFromCategoryEntryToItemsByCategory = (
  data: apiModel.CategoryEntry
): model.ItemsByCategory => {
  return {
    categoryName: data.name,
    items: mapListFromItemApiToItemModel(data.items),
  };
};

export const mapRestaurantFromApiToModel = (
  restaurant: apiModel.RestaurantInfo
): model.Restaurant => ({
  _id: new ObjectId(),
  name: restaurant.name,
  phone: restaurant.phone,
  address: restaurant.address,
  locationUrl: restaurant.locationUrl,
  description: restaurant.description,
  urlName: restaurant.urlName,
  theme: restaurant.theme,
  rationsDefinitions: reduceCategoryEntryListToRationDefinitionList(
    restaurant.menu
  ),
  menu: mapListFromCategoryEntryToItemsByCategory(restaurant.menu),
  menuDate: restaurant.menuDate,
  official: restaurant.official,
});
