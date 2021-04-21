export interface RestaurantInfo {
  id: string;
  cif: string;
  name: string;
  email: string;
  numberPhone: string;
  initialPassword: string;
}

export const createEmptyRestaurantInfo = (): RestaurantInfo => ({
  id: '',
  cif: '',
  name: '',
  email: '',
  numberPhone: '',
  initialPassword: '',
});
