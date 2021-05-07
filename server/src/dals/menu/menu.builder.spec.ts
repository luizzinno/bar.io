import { BarInfo, Menu, MenuCategory, ProductPortionType } from "dals"
import { buildMenu } from "./menu.builder";

describe('Menu builder unit tests', () => {
    it('should build a Menu', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: 'Asador Paquito',
            infoB: 'Carnes a la brasa',
            infoC: '951342464',
        };

        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: 'Entrantes',
                products: [
                    {
                        _id: '1',
                        name: 'Jamón Ibérico',
                        description: 'De la Sierra de Huelva',
                        portionTypeId: '1',
                        visible: true,
                        portions: [
                            {
                                _id: '1',
                                price: 3.00,
                            },
                            {
                                _id: '2',
                                price: 6.00,
                            },
                            {
                                _id: '3',
                                price: 12.00,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        name: 'Queso manchego',
                        description: null,
                        portionTypeId: '1',
                        visible: false,
                        portions: [
                            {
                                _id: '1',
                                price: 2.00,
                            },
                            {
                                _id: '2',
                                price: 4.00,
                            },
                            {
                                _id: '3',
                                price: 10.00,
                            },
                        ],
                    },
                ],
            },
            {
                _id: '10',
                name: 'Primeros',
                products: [
                    {
                        _id: '10',
                        name: 'Flamenquín casero',
                        description: null,
                        portionTypeId: '2',
                        visible: true,
                        portions: [
                            {
                                _id: '4',
                                price: 12.00,
                            },
                        ],
                    },
                ],
            },
        ];

        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: 'Raciones',
                portions: [
                    {
                        _id: '1',
                        name: 'Tapa',
                    },
                    {
                        _id: '2',
                        name: 'Media',
                    },
                    {
                        _id: '3',
                        name: 'Ración',
                    },
                ],
            },
            {
                _id: '2',
                name: 'Única',
                portions: [
                    {
                        _id: '4',
                        name: 'Única',
                    },
                ],
            },
        ]
        //Act
        const menu: Menu = buildMenu(barInfo, menuCategories, portionTypes);

        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: 'Asador Paquito',
                infoB: 'Carnes a la brasa',
                infoC: '951342464',
            },
            categories: [
                {
                    name: 'Entrantes',
                    products: [
                        {
                            name: 'Jamón Ibérico',
                            description: 'De la Sierra de Huelva',
                            portions: [
                                {
                                    name: 'Tapa',
                                    price: 3.00,
                                },
                                {
                                    name: 'Media',
                                    price: 6.00,
                                },
                                {
                                    name: 'Ración',
                                    price: 12.00,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Primeros',
                    products: [
                        {
                            name: 'Flamenquín casero',
                            description: '',
                            portions: [
                                {
                                    name: 'Única',
                                    price: 12.00,
                                },
                            ],
                        },
                    ],
                },
            ],
        };

        expect(menu).toEqual(expectedMenu);
    })
})