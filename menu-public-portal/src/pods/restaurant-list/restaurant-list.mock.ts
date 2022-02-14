import { RestaurantInfo } from "./restaurant-list.vm";

const papulinosFutureJSON: RestaurantInfo = {
  name: "Papulinos",
  urlName: "papulinos",
  phone: "952 28 38 49",
  address: "Calle Malasaña, 42 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/PAPULINOS/@36.726131,-4.42737,15z/data=!4m2!3m1!1s0x0:0xe25c1bc2d9bf5e99?sa=X&ved=2ahUKEwj_nuWFyvf1AhVjxYUKHTQ1ARgQ_BJ6BAg4EAU",

  description: "Las mejores carnes a la brasa",
};

const hermanosAlbaFutureJSON: RestaurantInfo = {
  name: "Hermanos Alba",
  urlName: "hermanosalba",
  phone: "951 33 18 03",
  address: "Calle Salvador Allende, 15 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Restaurante+Hermanos+Alba/@36.7199358,-4.3637038,15z/data=!4m2!3m1!1s0x0:0x20b21ada1121ce03?sa=X&ved=2ahUKEwj_8pDWyff1AhUkSvEDHeBgAOEQ_BJ6BAhOEAU",
  description: "La tradición de nuestra bahía",
};

export const restaurantListMockData: RestaurantInfo[] = [
  papulinosFutureJSON,
  hermanosAlbaFutureJSON,
];
