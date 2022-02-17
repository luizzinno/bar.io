import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { restaurant } from './restaurant-list/papulinos';
import {
  mapRestaurantFromApiToModel,
  rationDefinition,
} from 'pods/restaurant/restaurant.mappers';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);
    //recuperar carta, preguntar como se llama el fichero a añadir, se va restaurant-list y lo consume
    //nombre de la constante dentro del fichero
    // console.log(mapRestaurantFromApiToModel(restaurant));
    // console.log(isRationDefinition(restaurant.menu));
    // const items = restaurant.menu.flatMap((category) => category.items);
    // console.log(items);
    console.log(rationDefinition(restaurant.menu))
    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
