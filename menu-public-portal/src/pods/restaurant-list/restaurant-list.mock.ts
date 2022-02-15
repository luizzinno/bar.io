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

const estacionTerminoFutureJSON: RestaurantInfo = {
  name: "Estación Término",
  urlName: "estacionTermino",
  phone: "+34952401096",
  address: "Plaza del Señorío, Edificio Garcia Lorca, 8 29730 Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Estaci%C3%B3n+T%C3%A9rmino+Restaurante/@36.7166232,-4.2816961,15z/data=!4m5!3m4!1s0x0:0xdfb3fd3416c42c60!8m2!3d36.7166232!4d-4.2816961",
  description: "",
}

const palubaFutureJSON: RestaurantInfo = {
  name: "Paluba II",
  urlName: "paluba",
  phone: "606 629 069",
  address:
    "Rotonda del Motorista, La Granja, Avenida Juan Carlos I, 11405 Jerez de la Frontera, Cádiz",
  locationUrl:
    "https://www.google.com/maps/place/Cervecer%C3%ADa+Paluba/@36.6934059,-6.1025559,15z/data=!4m5!3m4!1s0x0:0x88ff8889eecfff0e!8m2!3d36.6934065!4d-6.1025711",
  description: "Cervecería & Urban Food",
};

export const restaurantListMockData: RestaurantInfo[] = [
  papulinosFutureJSON,
  hermanosAlbaFutureJSON,
  estacionTerminoFutureJSON,
  palubaFutureJSON,
];
