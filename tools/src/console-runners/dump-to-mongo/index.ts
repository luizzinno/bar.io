import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);
    //recuperar carta, preguntar como se llama el fichero a añadir, se va restaurant-list y lo consume
    //nombre de la constante dentro del fichero 
    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
