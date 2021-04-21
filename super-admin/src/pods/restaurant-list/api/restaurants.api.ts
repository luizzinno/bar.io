//Traemos el modelo de datos con los datos que pintaremos del api
import { Restaurant } from "./restaurants.api-model";
import { mockBarInfoList } from "./restaurants.mock.data";

const restaurantList = [...mockBarInfoList];

export const getRestaurants = async (): Promise<Restaurant[]> =>
{
 return await new Promise((resolve) => {
     setTimeout(() => {
      // mock call
       resolve(restaurantList);
    }, 500);
  });
}

export const deleteRestaurant = async (row: Restaurant): Promise<boolean> =>
{
 return await new Promise((resolve) => {
     setTimeout(() => {
      // mock call
      restaurantList.splice(restaurantList.indexOf(row),1);
       resolve(true);
     })});
}
