import { Collection } from 'mongodb';
import { getDBInstance } from 'core/servers';
import { Restaurant } from './restaurant.model';

export const getRestaurantContext = (): Collection<Restaurant> => {
  const db = getDBInstance();
  return db.collection<Restaurant>('restaurants');
};