import { RestaurantInfo } from "./restaurant.vm";

export const restaurantMockData: RestaurantInfo[] = [
  {
    name: "Papulinos",
    urlName: "papulinos",
    heading1: "Las mejores carnes a la brasa",
    heading2: "Teléfono de Contacto: 952 28 38 49",
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
  }
];
