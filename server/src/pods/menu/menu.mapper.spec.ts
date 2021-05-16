import { BarInfo, MenuCategory, ProductPortionType } from "dals"
import { mapMenuFromModelToApiModel } from "./menu.mapper";
import { Menu } from "./menu.model";

describe('Menu mapper unit tests', () => {
    it('should map to a Menu model', () => {
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
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);

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
    });
    it('should map properly null values', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: null,
            infoB: null,
            infoC: null,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: null,
                products: [
                    {
                        _id: '1',
                        name: null,
                        description: null,
                        portionTypeId: null,
                        visible: true,
                        portions: [
                            {
                                _id: '1',
                                price: null,
                            },
                            {
                                _id: '2',
                                price: null,
                            },
                            {
                                _id: '3',
                                price: null,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        name: null,
                        description: null,
                        portionTypeId: '1',
                        visible: false,
                        portions: [
                            {
                                _id: '1',
                                price: null,
                            },
                            {
                                _id: '2',
                                price: null,
                            },
                            {
                                _id: '3',
                                price: null,
                            },
                        ],
                    },
                ],
            },
            {
                _id: '10',
                name: null,
                products: [
                    {
                        _id: '10',
                        name: null,
                        description: null,
                        portionTypeId: null,
                        visible: true,
                        portions: [
                            {
                                _id: '4',
                                price: null,
                            },
                        ],
                    },
                ],
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: null,
                portions: [
                    {
                        _id: '1',
                        name: null,
                    },
                    {
                        _id: '2',
                        name: null,
                    },
                    {
                        _id: '3',
                        name: null,
                    },
                ],
            },
            {
                _id: '2',
                name: null,
                portions: [
                    {
                        _id: '4',
                        name: null,
                    },
                ],
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [
                                {
                                    name: '',
                                    price: 0,
                                },
                                {
                                    name: '',
                                    price: 0,
                                },
                                {
                                    name: '',
                                    price: 0,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [
                                {
                                    name: '',
                                    price: 0,
                                },
                            ],
                        },
                    ],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly undefined values', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: undefined,
                products: [
                    {
                        _id: '1',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: [
                            {
                                _id: '1',
                                price: undefined,
                            },
                            {
                                _id: '2',
                                price: undefined,
                            },
                            {
                                _id: '3',
                                price: undefined,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        name: undefined,
                        description: undefined,
                        portionTypeId: '1',
                        visible: false,
                        portions: [
                            {
                                _id: '1',
                                price: undefined,
                            },
                            {
                                _id: '2',
                                price: undefined,
                            },
                            {
                                _id: '3',
                                price: undefined,
                            },
                        ],
                    },
                ],
            },
            {
                _id: '10',
                name: undefined,
                products: [
                    {
                        _id: '10',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: [
                            {
                                _id: '4',
                                price: undefined,
                            },
                        ],
                    },
                ],
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: undefined,
                portions: [
                    {
                        _id: '1',
                        name: undefined,
                    },
                    {
                        _id: '2',
                        name: undefined,
                    },
                    {
                        _id: '3',
                        name: undefined,
                    },
                ],
            },
            {
                _id: '2',
                name: undefined,
                portions: [
                    {
                        _id: '4',
                        name: undefined,
                    },
                ],
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [
                                {
                                    name: '',
                                    price: 0,
                                },
                                {
                                    name: '',
                                    price: 0,
                                },
                                {
                                    name: '',
                                    price: 0,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [
                                {
                                    name: '',
                                    price: 0,
                                },
                            ],
                        },
                    ],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly null portion arrays', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: undefined,
                products: [
                    {
                        _id: '1',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: null,
                    },
                    {
                        _id: '2',
                        name: undefined,
                        description: undefined,
                        portionTypeId: '1',
                        visible: false,
                        portions: null,
                    },
                ],
            },
            {
                _id: '10',
                name: undefined,
                products: [
                    {
                        _id: '10',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: null,
                    },
                ],
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: undefined,
                portions: null,
            },
            {
                _id: '2',
                name: undefined,
                portions: null,
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [],
                        },
                    ],
                },
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [],
                        },
                    ],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly undefined portion arrays', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: undefined,
                products: [
                    {
                        _id: '1',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: undefined,
                    },
                    {
                        _id: '2',
                        name: undefined,
                        description: undefined,
                        portionTypeId: '1',
                        visible: false,
                        portions: undefined,
                    },
                ],
            },
            {
                _id: '10',
                name: undefined,
                products: [
                    {
                        _id: '10',
                        name: undefined,
                        description: undefined,
                        portionTypeId: undefined,
                        visible: true,
                        portions: undefined,
                    },
                ],
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: undefined,
                portions: undefined,
            },
            {
                _id: '2',
                name: undefined,
                portions: undefined,
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [],
                        },
                    ],
                },
                {
                    name: '',
                    products: [
                        {
                            name: '',
                            description: '',
                            portions: [],
                        },
                    ],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly null product arrays', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: undefined,
                products: null,
            },
            {
                _id: '10',
                name: undefined,
                products: null,
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: undefined,
                portions: undefined,
            },
            {
                _id: '2',
                name: undefined,
                portions: undefined,
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [],
                },
                {
                    name: '',
                    products: [],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly undefined product arrays', () => {
        //Arrange
        const barInfo: BarInfo = {
            _id: 'ID3242342',
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };
        const menuCategories: MenuCategory[] = [
            {
                _id: '1',
                name: undefined,
                products: undefined,
            },
            {
                _id: '10',
                name: undefined,
                products: undefined,
            },
        ];
        const portionTypes: ProductPortionType[] = [
            {
                _id: '1',
                name: undefined,
                portions: undefined,
            },
            {
                _id: '2',
                name: undefined,
                portions: undefined,
            },
        ]
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [
                {
                    name: '',
                    products: [],
                },
                {
                    name: '',
                    products: [],
                },
            ],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly null parameters', () => {
        //Arrange
        const barInfo: BarInfo = null;
        const menuCategories: MenuCategory[] = null;
        const portionTypes: ProductPortionType[] = null;
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [],
        };
        expect(menu).toEqual(expectedMenu);
    });
    it('should map properly undefined parameters', () => {
        //Arrange
        const barInfo: BarInfo = undefined;
        const menuCategories: MenuCategory[] = undefined;
        const portionTypes: ProductPortionType[] = undefined;
        //Act
        const menu: Menu = mapMenuFromModelToApiModel(barInfo, menuCategories, portionTypes);
        //Assert
        const expectedMenu: Menu = {
            restaurantInfo: {
                infoA: '',
                infoB: '',
                infoC: '',
            },
            categories: [],
        };
        expect(menu).toEqual(expectedMenu);
    });
})