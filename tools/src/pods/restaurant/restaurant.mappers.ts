import { ObjectId } from 'mongodb';
import * as model from 'dals';
import * as apiModel from './restaurant.api-model';

export const rationDefinition = (menu: apiModel.CategoryEntry[]) => {
  const items = menu.flatMap((category) => category.items);
  return items.reduce((result, item) => {
    if (item.priceByRation !== undefined) {
      const hasIncludeRation = result.some(
        (ration) => ration.name === item.priceByRation.rationName
      );
      if (hasIncludeRation) {
        //TODO: si tiene incluida la ración ver si todos las unit son igual y sino incluir las que falten
        return result;
      } else {
        return [
          {
            name: item.priceByRation.rationName,
            units: item.priceByRation.rationsTypes.map(
              (rationType) => rationType.unit
            ),
          },
          ...result,
        ];
      }
    } else {
      return result;
    }
  }, [] as model.RationDefinition[]);
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
  rationsDefinitions: rationDefinition(restaurant.menu),
  menu: [],
  menuDate: restaurant.menuDate,
  official: restaurant.official,
});
