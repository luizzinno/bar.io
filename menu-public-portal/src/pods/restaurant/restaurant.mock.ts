import { RestaurantInfo } from "./restaurant.vm";

const papulinosFutureJSON: RestaurantInfo = {
  name: "Papulinos",
  urlName: "papulinos",
  phone: "952 28 38 49",
  address: "Calle Malasaña, 42 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/PAPULINOS/@36.726131,-4.42737,15z/data=!4m2!3m1!1s0x0:0xe25c1bc2d9bf5e99?sa=X&ved=2ahUKEwj_nuWFyvf1AhVjxYUKHTQ1ARgQ_BJ6BAg4EAU",
  theme: "meat",
  description: "Las mejores carnes a la brasa",
  menu: [
    {
      name: "Ensaladas",
      items: [
        {
          name: "De la Casa",
          description: "Lechuga, tomate, maiz, remolacha, zanahoria, atún",
          price: 8,
        },
        {
          name: "Especial",
          description:
            "Lechuga, tomate, manzana, palmito, espárragos, nueces, pasas, salsa rosa",
          price: 10,
        },
        {
          name: "Queso de Cabra",
          description: "Lechuga, tomate, maiz, remolacha, zanahoria, atún",
          price: 12,
        },
        {
          name: "Cogollos de Lechuga a la Cordobesa",
          description:
            "Cortados en cuartos y aliñados con ajo, aceite y pimientos asados",
          price: 5.5,
        },
        {
          name: "Tomate",
          price: 5,
        },
        {
          name: "Tomate con Atún",
          price: 7,
        },
      ],
    },
    {
      name: "Entrantes",
      items: [
        {
          name: "Porra de la Casa",
          price: 3.8,
        },
        {
          name: "Migas Caseras",
          price: 3.5,
        },
        {
          name: "Anchoa Lolin (unidad)",
          description: "Tosta de pan, tomate triturado y aceite de oliva",
          price: 1.7,
        },
        {
          name: "Pulpo a la gallega",
          price: 14,
        },
      ],
    },
    {
      name: "Entrantes a la Brasa",
      items: [
        {
          name: "Chorizo Jalapeño (picante)",
          price: 3.4,
        },
        {
          name: "Chorizo Criollo",
          price: 3.4,
        },
        {
          name: "Morcilla de Burgos",
          price: 4.3,
        },
        {
          name: "Pata de Pulpo",
          price: 14,
        },
        {
          name: "Chorizo Ibérico",
          priceByRation: [
            {
              rationName: "½ Ración",
              price: 3.6,
            },
            {
              rationName: "Ración",
              price: 5.6,
            },
          ],
        },
        {
          name: "Salchichón Ibérico",
          priceByRation: [
            {
              rationName: "½ Ración",
              price: 3.6,
            },
            {
              rationName: "Ración",
              price: 5.6,
            },
          ],
        },
        {
          name: "Queso de Oveja",
          description: "Curado en Manteca de Cerdo Ibérico",
          priceByRation: [
            {
              rationName: "½ Ración",
              price: 5.5,
            },
            {
              rationName: "Ración",
              price: 9,
            },
          ],
        },
        {
          name: "Lomito Ibérico",
          priceByRation: [
            {
              rationName: "½ Ración",
              price: 6,
            },
            {
              rationName: "Ración",
              price: 9.5,
            },
          ],
        },
        {
          name: "Surtido Ibérico",
          priceByRation: [
            {
              rationName: "½ Ración",
              price: 8,
            },
            {
              rationName: "Ración",
              price: 11,
            },
          ],
        },
      ],
    },
    {
      name: "Tostas a la Brasa",
      items: [
        {
          name: "Tosta al Pil-Pil",
          description: "Langostino con salsa al pil-pil",
          price: 8,
        },
        {
          name: "Tosta de Queso de Cabra",
          description: "Rulo de queso de cabra con mermelada de tomate",
        },
      ],
    },
    {
      name: "Guarnición",
      items: [
        {
          name: "Patata Asada",
          price: 2.8,
        },
      ],
    },
    {
      name: "Salsas Adicionales",
      items: [
        {
          name: "A la Pimienta",
          price: 2,
        },
        {
          name: "Queso Azul",
          price: 2,
        },
        {
          name: "Miel y Mostaza",
          price: 2,
        },
        {
          name: "Champiñones",
          price: 2,
        },
        {
          name: "Chile Dulce",
          price: 2,
        },
      ],
    },
    {
      name: "Carnes a la Brasa",
      items: [
        {
          name: "Costilla de Cerdo",
          price: 11,
        },
        {
          name: "Costillitas de Cerdo al Infierno",
          price: 11,
        },
        {
          name: "Solomillo de Cerdo",
          price: 11.5,
        },
        {
          name: "Brocheta de Solomillo de Cerdo",
          price: 11.5,
        },
        {
          name: "Presa Ibérica de Cerdo de Jabugo",
          price: 15.5,
        },
        {
          name: "Codillo de Cerdo en su Jugo al Horno",
          price: 12,
        },
        {
          name: "Cochinillo de Cerdo Segoviano al Horno",
          description: "1/4 para dos personas",
          price: 35,
        },
        {
          name: "Entrecot Añojo Irlandés",
          price: 16,
        },
        {
          name: "Solomillo de Añojo Irlandés",
          price: 20,
        },
        {
          name: "Brocheta Solomillo de Añojo",
          price: 15.5,
        },
        {
          name: "Centro Chuletón Añojo Irlandés",
          price: 28,
        },
        {
          name: "Chuletitas de Cordero Lechal",
          price: 17.5,
        },
        {
          name: "Pierna de Cordero Lechal al Horno",
          price: 18,
        },
        {
          name: "Paletilla de Cordero Lechal al Horno",
          price: 21,
        },
        {
          name: "Filete de Pavo Aliñado",
          price: 9.5,
        },
        {
          name: "Pinchito de Pollo",
          price: 3.6,
        },
        {
          name: "Brocheta de Pollo",
          price: 10.5,
        },
        {
          name: "Pechuga de Pollo",
          price: 9,
        },
        {
          name: "Alitas de Pollo",
          priceByRation: [
            {
              rationName: "½ Ración (3 unidades)",
              price: 5.9,
            },
            {
              rationName: "Ración (5 unidades)",
              price: 9.5,
            },
          ],
        },
        {
          name: "Patita de Chivo en su Jugo al Horno",
          price: 18,
        },
      ],
    },
    {
      name: "Pescados a la Brasa",
      items: [
        {
          name: "Chuleta de Atún (Ventresca)",
          price: 11.5,
        },
        {
          name: "Pez Espada",
          price: 11.5,
        },
        {
          name: "Calamar",
          price: 16,
        },
      ],
    },
    {
      name: "Hamburguesas a la Brasa",
      items: [
        {
          name: "Filete de Hamburguesa",
          description: "Mixta, Hereford, Pollo, Picante",
          price: 5,
        },
        {
          name: "Hamburguesa Mixta",
          description:
            "Pan, Carne de Cerdo y Hereford, Queso Cheddar, Tomate Natural, Lechuga y Cebolla caramelizada con Patatas Chips",
          price: 9,
        },
        {
          name: "Hamburguesa Hereford",
          description:
            "Pan, Carne Hereford, Queso Cheddar, Tomate Natural, Lechuga y Cebolla caramelizada con Patatas Chips",
          price: 9.5,
        },
        {
          name: "Hamburguesa de Queso de Cabra",
          description:
            "Pan, Carne de Hereford, Queso de Cabra, Lechuga, Tomate Natural, Cebolla Caramelizada y Nueces con Patatas Chips",
          price: 10,
        },
        {
          name: "Hamburguesa Picante",
          description:
            "Pan, Carne de Cerdo y Hereford, Queso Cheddar, Lechuga, Tomate y Cebolla Frita y ali-oli con Patatas Chips",
          price: 8,
        },
        {
          name: "Hamburguesa de Pollo",
          description:
            "Pan, Carne de Pollo, Queso Cheddar, Lechuga, Tomate y Cebolla caramelizada con Patatas Chips",
          price: 8.5,
        },
        {
          name: "Hamburguesa de Soja",
          description:
            "Pan, Soja, Queso Cheddar, Tomate Natural, Lechuga y Cebolla Caramelizada con Patatas Chips",
          price: 9.5,
        },
      ],
    },
    {
      name: "Sugerencias",
      items: [
        {
          name: "Pinchito de Cordero",
          price: 6.5,
        },
        {
          name: "Entrecot de Angus Americano",
          price: 16,
        },
        {
          name: "Rabo de Toro al Vino Tino",
          price: 16,
        },
        {
          name: "Bacalao a la Riojana",
          price: 14.5,
        },
      ],
    },
  ],
};

const hermanosAlbaFutureJSON: RestaurantInfo = {
  name: "Hermanos Alba",
  urlName: "hermanosalba",
  theme: "fish",
  phone: "951 33 18 03",
  address: "Calle Salvador Allende, 15 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Restaurante+Hermanos+Alba/@36.7199358,-4.3637038,15z/data=!4m2!3m1!1s0x0:0x20b21ada1121ce03?sa=X&ved=2ahUKEwj_8pDWyff1AhUkSvEDHeBgAOEQ_BJ6BAhOEAU",
  description: "La tradición de nuestra bahía",
  menu: [
    {
      name: "Entrantes",
      items: [
        {
          name: "Anchoa 0,0 limpia en case sobre tosta de pan cristal y tomate (unidad)",
          price: 2.5,
        },
        {
          name: "Boqueron en vinagre hecho en casa XL (unidad)",
          price: 1.5,
        },
        {
          name: "Nuestra rusa rica en aove",
          price: 8,
        },
        {
          name: "Tartar de atún con leve toque de picante",
          price: 18,
        },
        {
          name: "Tomate rosa castellano con ventresca y aguacate de la axarquía",
          price: 12,
        },
        {
          name: "Croquetas de gamba blanca de Málaga hechas en casa",
          price: 12,
        },
        {
          name: "Jamón Ibérico de bellota aljomar",
          price: 24,
        },
      ],
    },
    {
      name: "Mariscos",
      items: [
        {
          name: "Conchas finas naturales o al Pil-Pil",
          price: 2.8,
          unit: "/ud.",
        },
        {
          name: "Búsanos de marbella",
          price: 4.5,
          unit: "/ud.",
        },
        {
          name: "Ostras francesas Gillardeau N2",
          price: 4.5,
          unit: "/ud.",
        },
        {
          name: "Zamburiñas al horno aliñadas con un falso Pilpil",
          price: 3.5,
          unit: "/ud.",
        },
        {
          name: "Mejillones al vapor",
          price: 10,
        },
        {
          name: "Coquinas de Málaga",
          price: 18,
        },
        {
          name: "Gamba blanca de la caleta para la plancha",
          price: 25,
        },
        {
          name: "Gamba roja de Almería",
          price: 36,
          unit: "/ud.",
        },
        {
          name: "Quisquilla de Motril cocida",
          price: 28,
        },
        {
          name: "Cigala de la caleta XXL",
          price: 12,
          unit: "/100 gr.",
        },
        {
          name: "Bogavante del mediterráneo",
          price: 8.5,
          unit: "/100 gr.",
        },
        {
          name: "Carabinero con patata y huevo",
          price: 59,
        },
      ],
    },
    {
      name: "Pescados",
      items: [
        {
          name: "Boquerón vitoriano frito o al limón",
          price: 8.5,
        },
        {
          name: "Calamar de potera troceado y frito",
          price: 14,
        },
        {
          name: "Calamaritos o Puntillas de la caleta fritos",
          price: 17,
        },
        {
          name: "Gambas fritas con huevo y trufa",
          price: 18,
        },
        {
          name: "Salmonetitos fritos de Adra",
          price: 10.5,
        },
        {
          name: "Chopitos plancha con ajo y perejil",
          price: 18,
        },
        {
          name: "Lenguado negro a la plancha",
          price: 6,
          unit: "/100 gr.",
        },
        {
          name: "Buen lomo de atún a la plancha tipo tataki",
          price: 22,
        },
        {
          name: "Pargo, dorado o urta salvaje de Conil a la sal o espalda",
          price: 5,
          unit: "/100 gr.",
        },
        {
          name: "Gallineta troceada y frita",
          price: 5.5,
          unit: "/100 gr.",
        },
        {
          name: "Rodaballo salvaje al horno en aceite",
          price: 6,
          unit: "/100 gr.",
        },
        {
          name: "Gallo Pedro de Almería troceado y frito",
          price: 5.5,
          unit: "/100 gr.",
        },
      ],
    },
  ],
};

const estacionTerminoFutureJSON: RestaurantInfo = {
  name: "Estación Término",
  urlName: "estacionTermino",
  theme: "default",
  phone: "+34952401096",
  address: "Plaza del Señorío, Edificio Garcia Lorca, 8 29730 Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Estaci%C3%B3n+T%C3%A9rmino+Restaurante/@36.7166232,-4.2816961,15z/data=!4m5!3m4!1s0x0:0xdfb3fd3416c42c60!8m2!3d36.7166232!4d-4.2816961",
  description: "",
  menu: [
    {
      name: "Entrantes",
      items: [
        {
          name: "Sopa fría del día",
          price: 5,
        },
        {
          name: "Sopa caliente del día",
          price: 5,
        },
        {
          name: "Ensalada gratinada",
          description: "Lechuga, Queso de Cabra, Nueces y Manzana",
          price: 8,
        },
        {
          name: "Ensalada tricolor",
          description: "Tomate, Aguacate, Queso Mozarela",
          price: 8,
        },
        {
          name: "Ensalada tropical",
          description: "Lechuga, Aguacate, Piña y Melocotón, Palmito",
          price: 8,
        },
        {
          name: "Ensalada E.T",
          description: "Zanahoria, Manzana, Pasas, Maiz, Nueces",
          price: 6.5,
        },
        {
          name: "Ensalada Atapay",
          description: "Lechuga, Apio, Manzana, Nueces y Pollo",
          price: 8,
        },
        {
          name: "Milhojas",
          description: "Verduras a la plancha con Queso de Cabra",
          price: 9,
        },
        {
          name: "Croquetas Caseras",
          price: 8,
        },
        {
          name: "Camembert Frito",
          price: 8,
        },
        {
          name: "Pincho de Langostinos y Vieras",
          price: 9.5,
        },
        {
          name: "Langostinos Rebozados",
          price: 9.5,
        },
        {
          name: "Langostinos al Curry",
          price: 10.25,
        },
      ],
    },
    {
      name: "Carnes",
      items: [
        {
          name: "Pincho de Cordero a la Moruna",
          price: 10.75,
        },
        {
          name: "Lápices de pollo a la Pimienta Verde",
          price: 12.75,
        },
        {
          name: "Pastel de Carne con Salsa de Frambuesas",
          price: 11.75,
        },
        {
          name: "Solomillo de Cerdo al Estilo E.T",
          price: 13.25,
        },
        {
          name: "Albóndigas a la Moruna",
          price: 12.75,
        },
        {
          name: "Solomillo de Ternera",
          price: 20,
        },
        {
          name: "Codillo de Cerdo al Horno",
          price: 13.25,
        },
        {
          name: "Bobotie",
          description: "Pastel de Carne Sudafricano",
          price: 11.75,
        },
      ],
    },
  ],
};

export const restaurantMockData: RestaurantInfo[] = [
  papulinosFutureJSON,
  hermanosAlbaFutureJSON,
  estacionTerminoFutureJSON,
];
