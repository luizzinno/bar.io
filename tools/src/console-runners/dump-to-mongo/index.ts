import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { restaurant } from './restaurant-list/papulinos';
import {
  mapRestaurantFromApiToModel,
  // rationDefinition,
  reduceCategoryEntryListToRationDefinitionList,
} from 'pods/restaurant/restaurant.mappers';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);
    
    console.log(mapRestaurantFromApiToModel(restaurant));
    
    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
