export interface RestaurantInfo {
    cif: string;
    name: string;
    email: string;
    numberPhone: string,
    initialPassword: string,
  }
  
  export const createEmptyRestaurantInfo = (): RestaurantInfo => ({
    cif: "",
    name: "",
    email: "",
    numberPhone: "",
    initialPassword: "",
  });
  