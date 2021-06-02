import * as model from 'dals/menu-category/menu-category.model';
import { mapFromMenuCategoryApiModelToModel, mapFromMenuCategoryModelToApiModel } from './menu-category.mapper';
import * as apiModel from './menu-category.model';

describe('MenuCategory mapper tests', () => {
    it('should map from api model to model', () => {
        //Arrange
        const model: apiModel.MenuCategory = {
            id: '1',
            name: 'Entrantes',
            products: [
                {
                    id: '1',
                    name: 'Jamón Ibérico',
                    description: 'Desde la Sierra de Huelva',
                    portionTypeId: '1',
                    visible: true,
                    portions: [
                        {
                            id: '1',
                            price: 5,
                        },
                        {
                            id: '2',
                            price: 7,
                        },
                        {
                            id: '3',
                            price: 10,
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Queso Manchego',
                    description: '',
                    portionTypeId: '1',
                    visible: false,
                    portions: [
                        {
                            id: '1',
                            price: 3,
                        },
                        {
                            id: '2',
                            price: 5,
                        },
                        {
                            id: '3',
                            price: 7,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryApiModelToModel(model);

        //Assert
        const expectedResult: model.MenuCategory = {
            _id: '1',
            name: 'Entrantes',
            products: [
                {
                    _id: '1',
                    name: 'Jamón Ibérico',
                    description: 'Desde la Sierra de Huelva',
                    portionTypeId: '1',
                    visible: true,
                    portions: [
                        {
                            _id: '1',
                            price: 5,
                        },
                        {
                            _id: '2',
                            price: 7,
                        },
                        {
                            _id: '3',
                            price: 10,
                        },
                    ],
                },
                {
                    _id: '2',
                    name: 'Queso Manchego',
                    description: '',
                    portionTypeId: '1',
                    visible: false,
                    portions: [
                        {
                            _id: '1',
                            price: 3,
                        },
                        {
                            _id: '2',
                            price: 5,
                        },
                        {
                            _id: '3',
                            price: 7,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with null values properly', () => {
        //Arrange
        const model: apiModel.MenuCategory = {
            id: null,
            name: null,
            products: [
                {
                    id: null,
                    name: null,
                    description: null,
                    portionTypeId: null,
                    visible: true,
                    portions: [
                        {
                            id: null,
                            price: null,
                        },
                        {
                            id: null,
                            price: null,
                        },
                        {
                            id: null,
                            price: null,
                        },
                    ],
                },
                {
                    id: null,
                    name: null,
                    description: null,
                    portionTypeId: null,
                    visible: false,
                    portions: [
                        {
                            id: null,
                            price: null,
                        },
                        {
                            id: null,
                            price: null,
                        },
                        {
                            id: null,
                            price: null,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryApiModelToModel(model);

        //Assert
        const expectedResult: model.MenuCategory = {
            _id: '',
            name: '',
            products: [
                {
                    _id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: true,
                    portions: [
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                    ],
                },
                {
                    _id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with null arrays properly', () => {
        //Arrange
        const model: apiModel.MenuCategory = {
            id: null,
            name: null,
            products: null,
        };

        //Act
        const result = mapFromMenuCategoryApiModelToModel(model);

        //Assert
        const expectedResult: model.MenuCategory = {
            _id: '',
            name: '',
            products: [],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with undefined values properly', () => {
        //Arrange
        const model: apiModel.MenuCategory = {
            id: undefined,
            name: undefined,
            products: [
                {
                    id: undefined,
                    name: undefined,
                    description: undefined,
                    portionTypeId: undefined,
                    visible: false,
                    portions: [
                        {
                            id: undefined,
                            price: undefined,
                        },
                        {
                            id: undefined,
                            price: undefined,
                        },
                        {
                            id: undefined,
                            price: undefined,
                        },
                    ],
                },
                {
                    id: undefined,
                    name: undefined,
                    description: undefined,
                    portionTypeId: undefined,
                    visible: false,
                    portions: [
                        {
                            id: undefined,
                            price: undefined,
                        },
                        {
                            id: undefined,
                            price: undefined,
                        },
                        {
                            id: undefined,
                            price: undefined,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryApiModelToModel(model);

        //Assert
        const expectedResult: model.MenuCategory = {
            _id: '',
            name: '',
            products: [
                {
                    _id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                    ],
                },
                {
                    _id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                        {
                            _id: '',
                            price: 0,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with undefined arrays', () => {
        //Arrange
        const model: apiModel.MenuCategory = {
            id: undefined,
            name: undefined,
            products: [],
        };

        //Act
        const result = mapFromMenuCategoryApiModelToModel(model);

        //Assert
        const expectedResult: model.MenuCategory = {
            _id: '',
            name: '',
            products: [],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map from model to api model', () => {
        //Arrange
        const model: model.MenuCategory = {
            _id: '1',
            name: 'Entrantes',
            products: [
                {
                    _id: '1',
                    name: 'Jamón Ibérico',
                    description: 'Desde la Sierra de Huelva',
                    portionTypeId: '1',
                    visible: true,
                    portions: [
                        {
                            _id: '1',
                            price: 5,
                        },
                        {
                            _id: '2',
                            price: 7,
                        },
                        {
                            _id: '3',
                            price: 10,
                        },
                    ],
                },
                {
                    _id: '2',
                    name: 'Queso Manchego',
                    description: '',
                    portionTypeId: '1',
                    visible: false,
                    portions: [
                        {
                            _id: '1',
                            price: 3,
                        },
                        {
                            _id: '2',
                            price: 5,
                        },
                        {
                            _id: '3',
                            price: 7,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.MenuCategory = {
            id: '1',
            name: 'Entrantes',
            products: [
                {
                    id: '1',
                    name: 'Jamón Ibérico',
                    description: 'Desde la Sierra de Huelva',
                    portionTypeId: '1',
                    visible: true,
                    portions: [
                        {
                            id: '1',
                            price: 5,
                        },
                        {
                            id: '2',
                            price: 7,
                        },
                        {
                            id: '3',
                            price: 10,
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'Queso Manchego',
                    description: '',
                    portionTypeId: '1',
                    visible: false,
                    portions: [
                        {
                            id: '1',
                            price: 3,
                        },
                        {
                            id: '2',
                            price: 5,
                        },
                        {
                            id: '3',
                            price: 7,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map model with null values properly', () => {
        //Arrange
        const model: model.MenuCategory = {
            _id: null,
            name: null,
            products: [
                {
                    _id: null,
                    name: null,
                    description: null,
                    portionTypeId: null,
                    visible: true,
                    portions: [
                        {
                            _id: null,
                            price: null,
                        },
                        {
                            _id: null,
                            price: null,
                        },
                        {
                            _id: null,
                            price: null,
                        },
                    ],
                },
                {
                    _id: null,
                    name: null,
                    description: null,
                    portionTypeId: null,
                    visible: false,
                    portions: [
                        {
                            _id: null,
                            price: null,
                        },
                        {
                            _id: null,
                            price: null,
                        },
                        {
                            _id: null,
                            price: null,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.MenuCategory = {
            id: '',
            name: '',
            products: [
                {
                    id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: true,
                    portions: [
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                    ],
                },
                {
                    id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map model with null arrays properly', () => {
        //Arrange
        const model: model.MenuCategory = {
            _id: null,
            name: null,
            products: null,
        };

        //Act
        const result = mapFromMenuCategoryModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.MenuCategory = {
            id: '',
            name: '',
            products: [],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with undefined values properly', () => {
        //Arrange
        const model: model.MenuCategory = {
            _id: undefined,
            name: undefined,
            products: [
                {
                    _id: undefined,
                    name: undefined,
                    description: undefined,
                    portionTypeId: undefined,
                    visible: false,
                    portions: [
                        {
                            _id: undefined,
                            price: undefined,
                        },
                        {
                            _id: undefined,
                            price: undefined,
                        },
                        {
                            _id: undefined,
                            price: undefined,
                        },
                    ],
                },
                {
                    _id: undefined,
                    name: undefined,
                    description: undefined,
                    portionTypeId: undefined,
                    visible: false,
                    portions: [
                        {
                            _id: undefined,
                            price: undefined,
                        },
                        {
                            _id: undefined,
                            price: undefined,
                        },
                        {
                            _id: undefined,
                            price: undefined,
                        },
                    ],
                },
            ],
        };

        //Act
        const result = mapFromMenuCategoryModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.MenuCategory = {
            id: '',
            name: '',
            products: [
                {
                    id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                    ],
                },
                {
                    id: '',
                    name: '',
                    description: '',
                    portionTypeId: '',
                    visible: false,
                    portions: [
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                        {
                            id: '',
                            price: 0,
                        },
                    ],
                },
            ],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should map model with undefined arrays', () => {
        //Arrange
        const model: model.MenuCategory = {
            _id: undefined,
            name: undefined,
            products: [],
        };

        //Act
        const result = mapFromMenuCategoryModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.MenuCategory = {
            id: '',
            name: '',
            products: [],
        };

        expect(result).toEqual(expectedResult);
    });
});