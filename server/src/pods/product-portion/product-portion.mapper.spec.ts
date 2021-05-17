import * as model from 'dals/product-portion/product-portion.model';
import { mapFromProductPortionApiModelToModel, mapFromProductPortionModelToApiModel, mapFromProductPortionTypeApiModelToModel, mapFromProductPortionTypeModelToApiModel } from './product-portion.mapper';
import * as apiModel from './product-portion.model';

describe('Product portion type mapper tests', () => {
    it('should map from api model to model', () => {
        //Arrange
        const model: apiModel.ProductPortionType = {
            id: '1',
            name: 'Raciones',
            portions: [
                {
                    id: '1',
                    name: 'Tapa',
                },
                {
                    id: '2',
                    name: 'Media',
                },
                {
                    id: '3',
                    name: 'Entera',
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeApiModelToModel(model);

        //Assert
        const expectedResult: model.ProductPortionType = {
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
                    name: 'Entera',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with null properties properly', () => {
        //Arrange
        const model: apiModel.ProductPortionType = {
            id: null,
            name: null,
            portions: [
                {
                    id: null,
                    name: null,
                },
                {
                    id: null,
                    name: null,
                },
                {
                    id: null,
                    name: null,
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeApiModelToModel(model);

        //Assert
        const expectedResult: model.ProductPortionType = {
            _id: '',
            name: '',
            portions: [
                {
                    _id: '',
                    name: '',
                },
                {
                    _id: '',
                    name: '',
                },
                {
                    _id: '',
                    name: '',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with undefined properties properly', () => {
        //Arrange
        const model: apiModel.ProductPortionType = {
            id: undefined,
            name: undefined,
            portions: [
                {
                    id: undefined,
                    name: undefined,
                },
                {
                    id: undefined,
                    name: undefined,
                },
                {
                    id: undefined,
                    name: undefined,
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeApiModelToModel(model);

        //Assert
        const expectedResult: model.ProductPortionType = {
            _id: '',
            name: '',
            portions: [
                {
                    _id: '',
                    name: '',
                },
                {
                    _id: '',
                    name: '',
                },
                {
                    _id: '',
                    name: '',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with null portion array properly', () => {
        //Arrange
        const model: apiModel.ProductPortionType = {
            id: null,
            name: null,
            portions: null,
        };

        //Act
        const result = mapFromProductPortionTypeApiModelToModel(model);

        //Assert
        const expectedResult: model.ProductPortionType = {
            _id: '',
            name: '',
            portions: [],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map api model with undefined portion array properly', () => {
        //Arrange
        const model: apiModel.ProductPortionType = {
            id: null,
            name: null,
            portions: undefined,
        };

        //Act
        const result = mapFromProductPortionTypeApiModelToModel(model);

        //Assert
        const expectedResult: model.ProductPortionType = {
            _id: '',
            name: '',
            portions: [],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map from model to api model', () => {
        //Arrange
        const model: model.ProductPortionType = {
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
                    name: 'Entera',
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.ProductPortionType = {
            id: '1',
            name: 'Raciones',
            portions: [
                {
                    id: '1',
                    name: 'Tapa',
                },
                {
                    id: '2',
                    name: 'Media',
                },
                {
                    id: '3',
                    name: 'Entera',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map model with null properties properly', () => {
        //Arrange
        const model: model.ProductPortionType = {
            _id: null,
            name: null,
            portions: [
                {
                    _id: null,
                    name: null,
                },
                {
                    _id: null,
                    name: null,
                },
                {
                    _id: null,
                    name: null,
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.ProductPortionType = {
            id: '',
            name: '',
            portions: [
                {
                    id: '',
                    name: '',
                },
                {
                    id: '',
                    name: '',
                },
                {
                    id: '',
                    name: '',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map model with undefined properties properly', () => {
        //Arrange
        const model: model.ProductPortionType = {
            _id: undefined,
            name: undefined,
            portions: [
                {
                    _id: undefined,
                    name: undefined,
                },
                {
                    _id: undefined,
                    name: undefined,
                },
                {
                    _id: undefined,
                    name: undefined,
                },
            ],
        };

        //Act
        const result = mapFromProductPortionTypeModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.ProductPortionType = {
            id: '',
            name: '',
            portions: [
                {
                    id: '',
                    name: '',
                },
                {
                    id: '',
                    name: '',
                },
                {
                    id: '',
                    name: '',
                },
            ],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map model with null portion array properly', () => {
        //Arrange
        const model: model.ProductPortionType = {
            _id: null,
            name: null,
            portions: null,
        };

        //Act
        const result = mapFromProductPortionTypeModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.ProductPortionType = {
            id: '',
            name: '',
            portions: [],
        }

        expect(result).toEqual(expectedResult);
    });
    it('should map model with undefined portion array properly', () => {
        //Arrange
        const model: model.ProductPortionType = {
            _id: null,
            name: null,
            portions: undefined,
        };

        //Act
        const result = mapFromProductPortionTypeModelToApiModel(model);

        //Assert
        const expectedResult: apiModel.ProductPortionType = {
            id: '',
            name: '',
            portions: [],
        }

        expect(result).toEqual(expectedResult);
    });
});

describe('Product portion mapper tests', () => {
    it('should map from api model to model', () => {
        //Arrange
        const model: apiModel.ProductPortion = {
            id: '1',
            name: 'Entera',
        };

        //Act
        const result = mapFromProductPortionApiModelToModel(model);

        //Arrange
        const expectedResult: model.ProductPortion = {
            _id: '1',
            name: 'Entera',
        };

        expect(result).toEqual(expectedResult);
    });

    it('should map api model null properties', () => {
        //Arrange
        const model: apiModel.ProductPortion = {
            id: null,
            name: null,
        };

        //Act
        const result = mapFromProductPortionApiModelToModel(model);

        //Arrange
        const expectedResult: model.ProductPortion = {
            _id: '',
            name: '',
        };

        expect(result).toEqual(expectedResult);
    });

    it('should map api model undefined properties', () => {
        //Arrange
        const model: apiModel.ProductPortion = {
            id: undefined,
            name: undefined,
        };

        //Act
        const result = mapFromProductPortionApiModelToModel(model);

        //Arrange
        const expectedResult: model.ProductPortion = {
            _id: '',
            name: '',
        };

        expect(result).toEqual(expectedResult);
    });

    it('should map from model to api model', () => {
        //Arrange
        const model: model.ProductPortion = {
            _id: '1',
            name: 'Entera',
        };

        //Act
        const result = mapFromProductPortionModelToApiModel(model);

        //Arrange
        const expectedResult: apiModel.ProductPortion = {
            id: '1',
            name: 'Entera',
        };

        expect(result).toEqual(expectedResult);
    });

    it('should map model null properties', () => {
        //Arrange
        const model: model.ProductPortion = {
            _id: null,
            name: null,
        };

        //Act
        const result = mapFromProductPortionModelToApiModel(model);

        //Arrange
        const expectedResult: apiModel.ProductPortion = {
            id: '',
            name: '',
        };

        expect(result).toEqual(expectedResult);
    });

    it('should map model undefined properties', () => {
        //Arrange
        const model: model.ProductPortion = {
            _id: undefined,
            name: undefined,
        };

        //Act
        const result = mapFromProductPortionModelToApiModel(model);

        //Arrange
        const expectedResult: apiModel.ProductPortion = {
            id: '',
            name: '',
        };

        expect(result).toEqual(expectedResult);
    });
});