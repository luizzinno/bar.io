import { Menu } from './menu.api.model';

export const mockedMenus: Map<string, Menu> = new Map<string, Menu>();

const mockedMenu: Menu = {
  restaurantInfo: {
    name: 'Asador Paquito',
    description: 'Comida andaluza',
    telephone: '951123123',
  },
  categories: [
    {
      name: 'Entrantes',
      products: [
        {
          name: 'Chorizo criollo',
          description: 'A la parrilla',
          portions: [
            { name: 'Tapa', price: 4.5 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Queso provolone',
          description: '',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Jamón ibérico',
          description: 'De bellota',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 15 },
          ],
        },
        {
          name: 'Queso de oveja viejo',
          description: '',
          portions: [
            { name: 'Tapa', price: 3.5 },
            { name: 'Media', price: 6.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Surtido ibérico',
          description: '',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 0 },
            { name: 'Ración', price: 13 },
          ],
        },
        {
          name: 'Morcilla de Burgos',
          description: '',
          portions: [
            { name: 'Tapa', price: 4.5 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Croquetas',
          description: 'Caseras de puchero',
          portions: [
            { name: 'Tapa', price: 2.5 },
            { name: 'Media', price: 4.5 },
            { name: 'Ración', price: 8.5 },
          ],
        },
        {
          name: 'Cogollos de Tudela',
          description: '',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 4.5 },
            { name: 'Ración', price: 8.5 },
          ],
        },
        {
          name: 'Anchoas del Cantábrico',
          description: '',
          portions: [
            { name: 'Tapa', price: 3.5 },
            { name: 'Media', price: 6.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Aceitunas',
          description: 'Chupadedos',
          portions: [
            { name: 'Tapa', price: 3 },
            { name: 'Media', price: 0 },
            { name: 'Ración', price: 0 },
          ],
        },
      ],
    },
    {
      name: 'Platos Principales',
      products: [
        {
          name: 'Flamenquín cordobés',
          description: '',
          portions: [{ name: 'Única', price: 9.5 }],
        },
        {
          name: 'Carrillada ibérica al Predro Ximénez',
          description: '',
          portions: [{ name: 'Única', price: 10.5 }],
        },
        {
          name: 'Huevos rotos con chorizo y patatas fritas',
          description: '',
          portions: [{ name: 'Única', price: 8.5 }],
        },
        {
          name: 'Patatas bravas',
          description: 'Muy picantes',
          portions: [{ name: 'Única', price: 6.5 }],
        },
      ],
    },
    {
      name: 'Ensaladas',
      products: [
        {
          name: 'Tomate en rodajas y ventresca',
          description: '',
          portions: [{ name: 'Única', price: 8 }],
        },
        {
          name: 'Ensalada de la casa',
          description: '',
          portions: [{ name: 'Única', price: 6.5 }],
        },
        {
          name: 'Ensalada mixta',
          description: '',
          portions: [{ name: 'Única', price: 6 }],
        },
        {
          name: 'Ensalada de pimientos',
          description: '',
          portions: [{ name: 'Única', price: 7.5 }],
        },
      ],
    },
    {
      name: 'Postres',
      products: [
        {
          name: 'Torrijas',
          description: '',
          portions: [{ name: 'Única', price: 6.5 }],
        },
        {
          name: 'Coulant de chocolate negro con helado de vainilla',
          description: '',
          portions: [{ name: 'Única', price: 8.5 }],
        },
        {
          name: 'Flan de huevo',
          description: '',
          portions: [{ name: 'Única', price: 5.5 }],
        },
        {
          name: 'Crema catalana',
          description: '',
          portions: [{ name: 'Única', price: 6.5 }],
        },
      ],
    },
    {
      name: 'Bebidas',
      products: [
        {
          name: 'Refrescos',
          description: '',
          portions: [{ name: 'Única', price: 2.5 }],
        },
        {
          name: 'Cerveza (caña)',
          description: '',
          portions: [{ name: 'Única', price: 2.5 }],
        },
        {
          name: 'Cerveza (Jarra)',
          description: '',
          portions: [{ name: 'Única', price: 3.5 }],
        },
        {
          name: 'Rioja (Copa)',
          description: '',
          portions: [{ name: 'Única', price: 3.5 }],
        },
        {
          name: 'Agua mineral (1l)',
          description: '',
          portions: [{ name: 'Única', price: 2.5 }],
        },
      ],
    },
  ],
};

mockedMenus.set('00000000-0000-0000-0000-000000000000', mockedMenu);
