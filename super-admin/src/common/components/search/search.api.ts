//Traemos el modelo de datos con los datos que pintaremos del api
import { Restaurant } from "pods/restaurant-list/restaurant.vm";

export const getRestaurantList = async (name: string): Promise<Restaurant[]> =>
{
 return await new Promise((resolve) => {
     setTimeout(() => {
      // mock call
       resolve([
        {
          name: 'Prueba 1',
          email: 'prueba@gmail.com',
          numberPhone: '627318329',
        },
      ]);
    }, 500);
  });
}
