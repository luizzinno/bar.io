import { RestaurantInfo } from "./restaurant.vm";

const papulinosFutureJSON: RestaurantInfo = {
  name: "Papulinos",
  urlName: "papulinos",
  phone: "952 28 38 49",
  address: "Calle Malasaña, 42 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/PAPULINOS/@36.726131,-4.42737,15z/data=!4m2!3m1!1s0x0:0xe25c1bc2d9bf5e99?sa=X&ved=2ahUKEwj_nuWFyvf1AhVjxYUKHTQ1ARgQ_BJ6BAg4EAU",
  communitySourceUrl: "http://papulinos.com/carta/",
  official: false,
  menuDate: "Actualizada el 14 de Febrero de 2022",
  description: "Las mejores carnes a la brasa",
  theme: "italian",
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
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 3.6,
              },
              {
                unit: "Ración",
                price: 5.6,
              },
            ],
          },
        },
        {
          name: "Salchichón Ibérico",
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 3.6,
              },
              {
                unit: "Ración",
                price: 5.6,
              },
            ],
          },
        },
        {
          name: "Queso de Oveja",
          description: "Curado en Manteca de Cerdo Ibérico",
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 5.5,
              },
              {
                unit: "Ración",
                price: 9,
              },
            ],
          },
        },
        {
          name: "Lomito Ibérico",
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 6,
              },
              {
                unit: "Ración",
                price: 8.5,
              },
            ],
          },
        },
        {
          name: "Surtido Ibérico",
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 8,
              },
              {
                unit: "Ración",
                price: 11,
              },
            ],
          },
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
          priceByRation: {
            rationName: "Raciones",
            rationsTypes: [
              {
                unit: "½ Ración",
                price: 5.9,
              },
              {
                unit: "Ración",
                price: 9.5,
              },
            ],
          },
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
  phone: "951 33 18 03",
  address: "Calle Salvador Allende, 15 - Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Restaurante+Hermanos+Alba/@36.7199358,-4.3637038,15z/data=!4m2!3m1!1s0x0:0x20b21ada1121ce03?sa=X&ved=2ahUKEwj_8pDWyff1AhUkSvEDHeBgAOEQ_BJ6BAhOEAU",
  menuDate: "Actualizada el 14 de Febrero de 2022",
  communitySourceUrl:
    "https://www.hermanosalba.com/_files/ugd/e7dd90_9fa99b00428b4754a7ff716eccc73fa3.pdf",
  official: false,
  description: "La tradición de nuestra bahía",
  theme: "fish",
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
  phone: "952 40 10 96",
  address:
    "Plaza del Señorío, 8, Edificio Garcia Lorca, 29730 Rincón de la Victoria, Málaga",
  locationUrl:
    "https://www.google.com/maps/place/Estaci%C3%B3n+T%C3%A9rmino+Restaurante/@36.7166232,-4.2816961,15z/data=!4m5!3m4!1s0x0:0xdfb3fd3416c42c60!8m2!3d36.7166232!4d-4.2816961",
  communitySourceUrl: "https://www.estacion-termino.es/carta/",
  theme: "default",
  official: false,
  menuDate: "Actualizada el 15 de Febrero de 2022",
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
    {
      name: "Pescados",
      items: [
        {
          name: "Bacalao Poché en su Pil-Pil",
          price: 14.25,
        },
        {
          name: "Filetes de Salmonete con Salsa de Hinojo",
          price: 14.25,
        },
        {
          name: "Salmón a la Pimienta Verde",
          price: 14.25,
        },
      ],
    },
  ],
};

const palubaFutureJSON: RestaurantInfo = {
  name: "Paluba II",
  urlName: "paluba",
  phone: "606 629 069",
  address:
    "Rotonda del Motorista, La Granja, Avenida Juan Carlos I, 11405 Jerez de la Frontera, Cádiz",
  locationUrl:
    "https://www.google.com/maps/place/Cervecer%C3%ADa+Paluba/@36.6934059,-6.1025559,15z/data=!4m5!3m4!1s0x0:0x88ff8889eecfff0e!8m2!3d36.6934065!4d-6.1025711",
  theme: "default",
  official: true,
  menuDate: "Actualizada el 15 de Febrero de 2022",
  description: "Cervecería & Urban Food",
  menu: [
    {
      name: "Cervezas",
      items: [
        {
          name: "Estrella Galicia Barril",
          price: 1.2,
          description:
            "Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
        },
        {
          name: "Estrella Galicia (33 cl)",
          price: 1.5,
          description:
            "Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
        },
        {
          name: "1906 Reserva Especial",
          price: 2,
          description:
            "Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
        },
        {
          name: "Grolsch Radler",
          price: 1.3,
          description:
            "Una mezcla de 40% de cerveza Grolsch y zumo de frutas. Carácter refrescante propio de una Radler; con la calidad y tradición propias de Grolsch. Con una mezcla de 40% de cerveza Grolsch y zumo de frutas, y elaborada solo con ingredientes naturales, Grolsch Radler tiene un sabor dulce y un regusto muy ligero, con el sabor refrescante que le aporta el limón.",
        },
        {
          name: "Brewdog - Punk IPA",
          price: 2.7,
          description:
            "Levadura Wyeast 1056 - American Ale. Malta Extra Pale y Caramalt. Lúpulos Chinook, Ahtanum, Amarillo, Cascade, Simcoe y Nelson Sauvin.",
        },
        {
          name: "Erdinger Urweisse (50 cl)",
          price: 2.9,

          description:
            "Agua, Malta de trigo (+ 50%), malta de cebada, malta tostada, lúpulo Hallertau y levadura weizen.",
        },
      ],
    },
    {
      name: "Cervezas cero alcohol",
      items: [
        {
          name: "Estrella Galicia 0,0%",
          price: 1.5,
          description:
            "Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
        },
        {
          name: "Estrella Galicia 0,0% Tostada",
          price: 1.8,
          description:
            "Agua de la ciudad de A Coruña, blend de maltas con diferentes grados de secado/tostado, maíz, lúpulos de las variedades Nugget, Perle y Sladek. Levadura seleccionada de Hijos de Rivera.",
        },
        {
          name: "Estrella Galicia 0,0% Negra",
          price: 1.8,

          description:
            "Agua de la ciudad de A Coruña, un coupage de cuatro maltas (Pilsen, Dark, Caramel y Black),lúpulos de las variedades Nugget y Sladek. Levadura seleccionada de Hijos de Rivera.",
        },
      ],
    },
    {
      name: "Tapas frías",
      items: [
        {
          name: "Ensaladilla",
          price: 2.5,
        },
        {
          name: "Ali-oli",
          price: 2.2,
        },
        {
          name: "Pimientos asados con caballa",
          price: 3,
        },
        {
          name: "Boquerones en vinagre",
          price: 3,
        },
        {
          name: "Chicharrones",
          price: 3,
        },
        {
          name: "Tapa de queso",
          price: 2.5,
        },
        {
          name: "Queso con anchoas",
          price: 3,
        },
      ],
    },
    {
      name: "Tapas Calientes",
      items: [
        {
          name: "Carrillá Ibérica",
          price: 3,
        },
        {
          name: "Albóndigas",
          price: 3,
        },
        {
          name: "Pinchito guarnición",
          price: 4,
        },
        {
          name: "Croquetas de chicharrones",
          price: 3,
        },
        {
          name: "Lagrimitas de pollo",
          price: 3.5,
        },
        {
          name: "Medallones de queso de cabra a la plancha",
          price: 6.3,
        },
        {
          name: "Salchipapa",
          price: 3,
          description: "Patatas fritas con salchicha y salsas",
        },
      ],
    },
    {
      name: "Montaditos",
      items: [
        {
          name: "Palometa",
          price: 2.5,
        },
        {
          name: "Melva",
          price: 2.5,
        },
        {
          name: "Caballa",
          price: 2.5,
        },
        {
          name: "Lomo",
          price: 2.5,
        },
        {
          name: "Serranito",
          price: 3,
        },
      ],
    },
    {
      name: "Ensaladas",
      items: [
        {
          name: "Ensalada Mixta",
          price: 5,
          description: "Lechuga, tomate, cebolla, huevo, maíz, atun",
        },
        {
          name: "Ensalada César con pollo",
          price: 5,
          description:
            "Lechuga, pechuga de pollo, picatostes, queso parmesano, salsa césar",
        },
      ],
    },
    {
      name: "Entrantes",
      items: [
        {
          name: "Nachos Mexicanos",
          price: 5.5,
          description:
            "Nachos, mezcla de quesos, pico de gallo y chili con carne",
        },
        {
          name: "Nachos 3 Salsas",
          price: 5,
          description:
            "Nachos, mezcla de quesos, guacamole, crema agria y cebolla encurtida",
        },
        {
          name: "Patatas Paluba",
          price: 5,
          description:
            "Patatas fritas, bacon, queso Chedar y nuestra salsa especial",
        },
        {
          name: "Patatas Bacon Cheese Fries",
          price: 5.5,
          description:
            "Patatas fritas, bacon, mezcla de quesos y salsa ranchera",
        },
        {
          name: "Patatas Chili Cheese Fries",
          price: 6.5,
          description:
            "Patatas fritas, salsa ranchera, mezcla de quesos, chili con carne, pico de gallo y jalapeños",
        },
        {
          name: "Patatas Pulled Pork",
          price: 6.0,
          description: "Patatas fritas, mezcla de quesos, pulled pork",
        },
        {
          name: "Patatas Bravas",
          price: 3.5,
          description: "Patatas fritas con salsa brava",
        },
      ],
    },
    {
      name: "Platos",
      items: [
        {
          name: "Costilla BBQ",
          price: 13,
        },
        {
          name: "Lasaña casera",
          price: 4.8,
          description: "Pasta, boloñesa, queso y bechamel",
        },
        {
          name: "Revuelto casero",
          price: 4.5,
          description: "Patatas, huevo, jamón y pimientos",
        },
        {
          name: "Huevos rotos",
          price: 4.5,
          description: "Patatas, jamón y huevos",
        },
        {
          name: "Brochetas",
          price: 5.5,
          description: "De pollo o cerdo, con guarnición",
        },
        {
          name: "Aneto",
          price: 4.5,
          description: "A la castellana con patatas y pimientos asados",
        },
        {
          name: "Escalopines",
          price: 4,
          description: "De pollo empanado con patatas",
        },
      ],
    },
    {
      name: "Burguers",
      items: [
        {
          name: "Paluba Burguer",
          price: 7.8,
          description: "",
        },
        {
          name: "Black Angus XL",
          price: 7,
          description: "",
        },
        {
          name: "Pulled Pork",
          price: 6.5,
          description: "",
        },
        {
          name: "Chicharron's Burguer",
          price: 5.5,
          description: "",
        },
        {
          name: "Buey Burguer",
          price: 5.5,
          description: "",
        },
        {
          name: "Burguer completa",
          price: 4.8,
          description: "",
        },
      ],
    },
    {
      name: "Sandwiches",
      items: [
        {
          name: "Sandwich Paluba",
          price: 5,
          description:
            "Primer piso de ensaladilla de pollo desmenuzado. Segundo piso de queso, jamón york y huevo",
        },
        {
          name: "Sandwich Club",
          price: 5,
          description:
            "Dos pisos de pollo, jamón york, bacon, queso Edam, lechuga, tomate y mayonesa",
        },
        {
          name: "Sandwich Vegetal",
          price: 3.5,
          description: "Atún, pico de gallo, lechuga y salsa césar",
        },
      ],
    },
    {
      name: "Viva México 🇲🇽",
      items: [
        {
          name: "Tacos de lagarto ibérico",
          price: 5,
          description:
            "3 x Tortilla de trigo, lagarto ibérico, queso chedar y cilantro",
        },
        {
          name: "Tacos de carne",
          price: 4.5,
          description: "3 x Tortilla de trigo, carne, pico de gallo y lima",
        },
        {
          name: "Tacos de pollo",
          price: 4.5,
          description:
            "3 x Tortilla de trigo, pollo, mix de quesos y salsa Garden",
        },
        {
          name: "Pulled Pork Tacos",
          price: 5,
          description:
            "3 x Tortilla de maíz, pulled pork, aguacate, cebolla encurtida y pepinillos",
        },
        {
          name: "Tacos de langostinos",
          price: 5,
          description:
            "2 x Tortilla de maíz, pico de gallo, langostinos en tempura, salsa brava y cebolla encurtida",
        },
      ],
    },
    {
      name: "Más México",
      items: [
        {
          name: "Fajita de pollo",
          price: 6,
          description:
            "Pollo, pimientos, tortillas de trigo, crema agria, queso y guacamole",
        },
        {
          name: "Burrito",
          price: 5.5,
          description:
            "Tortilla de trigo y Tomate, arroz salvaje, pollo, maíz, mix de quesos y salsa Garden. Se acompaña con salsa alioli",
        },
        {
          name: "Enchilada de Pollo",
          price: 5,
          description:
            "Tortilla de trigo y tomate,  salsa mojo picón, mix de quesos, pollo, pico de gallo, crema agria y cebolla roja",
        },
      ],
    },
    {
      name: "Quesadillas",
      items: [
        {
          name: "Quesadilla de carne",
          price: 4.5,
          description: "Tortilla de trigo, carne y mix de quesos",
        },
        {
          name: "Quesadilla de pollo",
          price: 4.5,
          description: "Tortilla de trigo, pollo, maíz y mix de quesos",
        },
        {
          name: "Quesadilla BBQ",
          price: 4.5,
          description:
            "Tortilla de trigo, bacon, mix de quesos y salsa barbacoa",
        },
      ],
    },
    {
      name: "Hot Dog's",
      items: [
        {
          name: "Hot Dog XL",
          price: 3,
          description: "Con pico de gallo o queso y cebolla frita",
        },
      ],
    },
    {
      name: "Postres",
      items: [
        {
          name: "Arroz con leche",
          price: 3.5,
        },
        {
          name: "Panacota",
          price: 3.5,
        },
        {
          name: "Coulant de chocolate",
          price: 3.5,
        },
      ],
    },
  ],
};

export const restaurantMockData: RestaurantInfo[] = [
  papulinosFutureJSON,
  hermanosAlbaFutureJSON,
  estacionTerminoFutureJSON,
  palubaFutureJSON,
];
