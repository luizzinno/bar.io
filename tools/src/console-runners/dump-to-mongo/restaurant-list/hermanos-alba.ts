import { ObjectId } from 'mongodb';
import { RestaurantInfo } from 'pods/restaurant';

// TODO: Sacar a fichero comun donde esten los restaurant-list .ts
export const rationsDefinitions = {
  halfRation: '½ Ración',
  ration: 'Ración',
};

export const restaurant: RestaurantInfo = {
  name: 'Hermanos Alba',
  phone: '951 33 18 03',
  address: 'Calle Salvador Allende, 15 - Málaga',
  locationUrl:
    'https://www.google.com/maps/place/Restaurante+Hermanos+Alba/@36.7199358,-4.3637038,15z/data=!4m2!3m1!1s0x0:0x20b21ada1121ce03?sa=X&ved=2ahUKEwj_8pDWyff1AhUkSvEDHeBgAOEQ_BJ6BAhOEAU',
  description: 'La tradición de nuestra bahía',
  urlName: 'hermanosalba',
  theme: 'fish',
  menu: [
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Anchoa 0,0 limpia en case sobre tosta de pan cristal y tomate (unidad)',
          price: 2.5,
          // TODO: Remove this priceByRation
          priceByRation: [
            {
              rationName: rationsDefinitions.halfRation,
              price: 2.5,
            },
          ],
        },
        {
          name: 'Boqueron en vinagre hecho en casa XL (unidad)',
          price: 1.5,
        },
        {
          name: 'Nuestra rusa rica en aove',
          price: 8,
        },
        {
          name: 'Tartar de atún con leve toque de picante',
          price: 18,
        },
        {
          name: 'Tomate rosa castellano con ventresca y aguacate de la axarquía',
          price: 12,
        },
        {
          name: 'Croquetas de gamba blanca de Málaga hechas en casa',
          price: 12,
        },
        {
          name: 'Jamón Ibérico de bellota aljomar',
          price: 24,
        },
      ],
    },
    {
      name: 'Mariscos',
      items: [
        {
          name: 'Conchas finas naturales o al Pil-Pil',
          price: 2.8,
          unit: '/ud.',
        },
        {
          name: 'Búsanos de marbella',
          price: 4.5,
          unit: '/ud.',
        },
        {
          name: 'Ostras francesas Gillardeau N2',
          price: 4.5,
          unit: '/ud.',
        },
        {
          name: 'Zamburiñas al horno aliñadas con un falso Pilpil',
          price: 3.5,
          unit: '/ud.',
        },
        {
          name: 'Mejillones al vapor',
          price: 10,
        },
        {
          name: 'Coquinas de Málaga',
          price: 18,
        },
        {
          name: 'Gamba blanca de la caleta para la plancha',
          price: 25,
        },
        {
          name: 'Gamba roja de Almería',
          price: 36,
          unit: '/ud.',
        },
        {
          name: 'Quisquilla de Motril cocida',
          price: 28,
        },
        {
          name: 'Cigala de la caleta XXL',
          price: 12,
          unit: '/100 gr.',
        },
        {
          name: 'Bogavante del mediterráneo',
          price: 8.5,
          unit: '/100 gr.',
        },
        {
          name: 'Carabinero con patata y huevo',
          price: 59,
        },
      ],
    },
    {
      name: 'Pescados',
      items: [
        {
          name: 'Boquerón vitoriano frito o al limón',
          price: 8.5,
        },
        {
          name: 'Calamar de potera troceado y frito',
          price: 14,
        },
        {
          name: 'Calamaritos o Puntillas de la caleta fritos',
          price: 17,
        },
        {
          name: 'Gambas fritas con huevo y trufa',
          price: 18,
        },
        {
          name: 'Salmonetitos fritos de Adra',
          price: 10.5,
        },
        {
          name: 'Chopitos plancha con ajo y perejil',
          price: 18,
        },
        {
          name: 'Lenguado negro a la plancha',
          price: 6,
          unit: '/100 gr.',
        },
        {
          name: 'Buen lomo de atún a la plancha tipo tataki',
          price: 22,
        },
        {
          name: 'Pargo, dorado o urta salvaje de Conil a la sal o espalda',
          price: 5,
          unit: '/100 gr.',
        },
        {
          name: 'Gallineta troceada y frita',
          price: 5.5,
          unit: '/100 gr.',
        },
        {
          name: 'Rodaballo salvaje al horno en aceite',
          price: 6,
          unit: '/100 gr.',
        },
        {
          name: 'Gallo Pedro de Almería troceado y frito',
          price: 5.5,
          unit: '/100 gr.',
        },
      ],
    },
  ],
};
