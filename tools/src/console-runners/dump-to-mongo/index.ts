import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { mapRestaurantFromApiToModel } from 'pods/restaurant/restaurant.mappers';
import { restaurantDbRepository } from 'dals';
import { inputQuestions } from './questions';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);

    const { file } = await prompt(inputQuestions);
    const { restaurant } = require(`./restaurant-list/${file}`);

    const restaurantModel = await restaurantDbRepository.getRestaurantByUrlName(
      file
    );

    if (restaurantModel) {
      throw 'Restaurant with this name exist in data base';
    } else {
      await restaurantDbRepository.saveRestaurant(
        mapRestaurantFromApiToModel(restaurant)
      );

      console.log('Restaurant created:', { restaurant: file });
    }

    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
