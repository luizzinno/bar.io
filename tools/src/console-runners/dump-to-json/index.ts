import { prompt } from 'inquirer';
import fs from 'fs';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { restaurantDbRepository } from 'dals';
import { inputQuestions } from './questions';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);

    const { file } = await prompt(inputQuestions);

    const restaurant = await restaurantDbRepository.getRestaurantByUrlName(
      file
    );

    if (restaurant) {
      fs.writeFileSync(`../menu-public-portal/public/${file}.json`, JSON.stringify(restaurant, null, 2));

      console.log('Restaurant created:', { restaurant: file });
    } else {
      console.log('Restaurant not found');
    }

    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
