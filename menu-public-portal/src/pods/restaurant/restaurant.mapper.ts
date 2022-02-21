import * as restaurantApi from "./api/api.model";
import * as restaurantVm from "./restaurant.vm";
import { mapToCollection } from "common/mappers";

const mapDatefromApiToModel = (date: Date): string => {
  const date1 = new Date(date);
  const day = date1.getDate();
  const year = date1.getUTCFullYear();
  const month = date1.getMonth() + 1;
  let monthFromNumberToDate = "";

  switch (month) {
    case 1:
      monthFromNumberToDate = "Enero";
      break;
    case 2:
      monthFromNumberToDate = "Febrero";
      break;
    case 3:
      monthFromNumberToDate = "Marzo";
      break;
    case 4:
      monthFromNumberToDate = "Abril";
      break;
    case 5:
      monthFromNumberToDate = "Mayo";
      break;
    case 6:
      monthFromNumberToDate = "Junio";
      break;
    case 7:
      monthFromNumberToDate = "Julio";
      break;
    case 8:
      monthFromNumberToDate = "Agosto";
      break;
    case 9:
      monthFromNumberToDate = "Septiembre";
      break;
    case 10:
      monthFromNumberToDate = "Octubre";
      break;
    case 11:
      monthFromNumberToDate = "Noviembre";
      break;
    case 12:
      monthFromNumberToDate = "Diciembre";
      break;
    default:
      break;
  }

  return `Actualizada el ${day} de ${monthFromNumberToDate} de ${year}`;
};

console.log(mapDatefromApiToModel(new Date()));

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
  menuDate: mapDatefromApiToModel(restaurantApi.menuDate),
  communitySourceUrl: restaurantApi.communitySourceUrl,
  official: restaurantApi.official,
  description: restaurantApi.description,
  theme: restaurantApi.theme,
  menu: mapListFromCategoryEntryApitoCategoryEntryVm(restaurantApi.menu),
});
