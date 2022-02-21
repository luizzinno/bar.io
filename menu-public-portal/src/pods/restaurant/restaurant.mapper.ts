import * as restaurantApi from "./api/api.model";
import * as restaurantVm from "./restaurant.vm";
import { mapToCollection } from "common/mappers";

const mapListFromRationTypeApiToRationTypeVm = (
  rationType: restaurantApi.RationType[]
): restaurantVm.RationType[] =>
  mapToCollection(rationType, mapFromRationTypeApiToRationTypeVm);

const mapFromRationTypeApiToRationTypeVm = (
  rationType: restaurantApi.RationType
): restaurantVm.RationType => ({
  unit: rationType.unit,
  price: rationType.price,
});

const mapFromPriceByRationApiToPriceByRationVm = (
  priceByRation: restaurantApi.PriceByRation
): restaurantVm.PriceByRation => ({
  rationName: priceByRation.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeVm(
    priceByRation.rationsTypes
  ),
});

const mapListFromItemsApiToItemsVm = (
  items: restaurantApi.Item[]
): restaurantVm.Item[] => mapToCollection(items, mapFromItemsApiToItemsVm);

const mapFromItemsApiToItemsVm = (
  item: restaurantApi.Item
): restaurantVm.Item => ({
  name: item.name,
  description: item.description,
  price: item.price ? item.price : null,
  priceByRation: item.priceByRation
    ? mapFromPriceByRationApiToPriceByRationVm(item.priceByRation)
    : null,
  unit: item.unit ? item.unit : null,
});

const mapListFromCategoryEntryApitoCategoryEntryVm = (
  category: restaurantApi.CategoryEntry[]
): restaurantVm.CategoryEntry[] =>
  mapToCollection(category, mapFromCategoryEntryApitoCategoryEntryVm);

const mapFromCategoryEntryApitoCategoryEntryVm = (
  category: restaurantApi.CategoryEntry
): restaurantVm.CategoryEntry => ({
  name: category.categoryName,
  items: mapListFromItemsApiToItemsVm(category.items),
});

export const mapFromRestaurantApiToRestaurantVm = (
  restaurantApi: restaurantApi.RestaurantApi
): restaurantVm.RestaurantInfo => ({
  name: restaurantApi.name,
  urlName: restaurantApi.urlName,
  phone: restaurantApi.phone,
  address: restaurantApi.address,
  locationUrl: restaurantApi.locationUrl,
  menuDate: restaurantApi.menuDate.toString(),
  communitySourceUrl: restaurantApi.communitySourceUrl,
  official: restaurantApi.official,
  description: restaurantApi.description,
  theme: restaurantApi.theme,
  menu: mapListFromCategoryEntryApitoCategoryEntryVm(restaurantApi.menu),
});
