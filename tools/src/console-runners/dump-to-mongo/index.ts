import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { mapRestaurantFromApiToModel } from 'pods/restaurant/restaurant.mappers';
import { restaurantDbRepository } from 'dals';
import { Question } from 'inquirer';

const inputQuestions: Question[] = [
  {
    name: 'file',
    type: 'input',
    message: 'Insert restaurant: ',
  },
];

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);

    const { file } = await prompt(inputQuestions);
    const { restaurant } = require(`./restaurant-list/${file}`);

    await restaurantDbRepository.saveRestaurant(
      mapRestaurantFromApiToModel(restaurant)
    );

    console.log('Restaurant created:', { restaurant: file });

    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
