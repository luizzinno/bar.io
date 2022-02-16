import { ObjectId } from 'mongodb';
import * as model from 'dals';
import * as apiModel from './restaurant.api-model';

export const mapRestaurantFromApiToModel = (
  restaurant: apiModel.RestaurantInfo,
  rationMap: Record<string, string>,
): model.Restaurant => {
  const categoriesDefinitions = restaurant.menu.map(
    (c, index) =>
      ({
        _id: new ObjectId(),
        name: c.name,
        order: index,
      } as model.CategoryDefinition)
  );
  const rationsDefinitions = Object.values(rationMap).map(
    (rationName) =>
      ({
        _id: new ObjectId(),
        name: rationName,
        types: [], // TODO: Preguntar de donde sacar info
      } as model.RationDefinition)
  );

  const menu = restaurant.menu.map(
    (c, index) =>
      ({
        _id: categoriesDefinitions[index]._id,
        name: c.name,
        items: [
          {
            name: 'Pata de Pulpo',
            price: 14,
          },
          {
            name: 'Chorizo Ibérico',
            priceByRation: [
              {
                _id: new ObjectId(),
                rationTypedId: rationsDefinitions.find(r => r.name === item.rationName)?._id,
                rationName: item.rationName,
                price: item.price,
              },
              {
                _id: '2',
                rationTypedId: '2',
                rationName: 'Ración',
                price: 5.6,
              },
            ],
          },
          {
            name: 'Salchichón Ibérico',
            priceByRation: [
              {
                _id: '3',
                rationTypedId: '1',
                rationName: '½ Ración',
                price: 3.6,
              },
              {
                _id: '4',
                rationTypedId: '2',
                rationName: 'Ración',
                price: 5.6,
              },
            ],
          },
        ],
      } as model.ItemsByCategory)
  );
  return {
    categoriesDefinitions,
    menu,
    rationsDefinitions: [
      {
        _id: '1',
        name: '½ Ración',
      },
      {
        _id: '2',
        name: 'Ración',
      },
    ],
  } as model.Restaurant; // TODO: remove "as"
};
