import * as apiModel from './bar-info.model';
import * as model from 'dals/bar-info/bar-info.model';
import { mapFromBarInfoApiModelToModel, mapFromBarInfoModelToApiModel } from './bar-info.mapper';

describe('BarInfo mapper tests', () => {
    it('should map from model to api model', () => {
        //Arrange
        const model: model.BarInfo = {
            _id: '1',
            infoA: 'Nombre del restaurante',
            infoB: 'Dirección del restaurante',
            infoC: 'Teléfono del restaurante',
        };

        //Act
        const result = mapFromBarInfoModelToApiModel(model);

        //Assert
        const expectedModel: apiModel.BarInfo = {
            id: '1',
            infoA: 'Nombre del restaurante',
            infoB: 'Dirección del restaurante',
            infoC: 'Teléfono del restaurante',
        }

        expect(result).toEqual(expectedModel);
    });

    it('should map from api model to model', () => {
        //Arrange
        const model: apiModel.BarInfo = {
            id: '1',
            infoA: 'Nombre del restaurante',
            infoB: 'Dirección del restaurante',
            infoC: 'Teléfono del restaurante',
        };

        //Act
        const result = mapFromBarInfoApiModelToModel(model);

        //Assert
        const expectedModel: model.BarInfo = {
            _id: '1',
            infoA: 'Nombre del restaurante',
            infoB: 'Dirección del restaurante',
            infoC: 'Teléfono del restaurante',
        }

        expect(result).toEqual(expectedModel);
    });

    it('should map properly null model properties to api model', () => {
        //Arrange
        const model: model.BarInfo = {
            _id: null,
            infoA: null,
            infoB: null,
            infoC: null,
        };

        //Act
        const result = mapFromBarInfoModelToApiModel(model);

        //Assert
        const expectedModel: apiModel.BarInfo = {
            id: '',
            infoA: '',
            infoB: '',
            infoC: '',
        }

        expect(result).toEqual(expectedModel);
    });

    it('should map properly null api model properties', () => {
        //Arrange
        const model: apiModel.BarInfo = {
            id: null,
            infoA: null,
            infoB: null,
            infoC: null,
        };

        //Act
        const result = mapFromBarInfoApiModelToModel(model);

        //Assert
        const expectedModel: model.BarInfo = {
            _id: '',
            infoA: '',
            infoB: '',
            infoC: '',
        }

        expect(result).toEqual(expectedModel);
    });

    it('should map properly undefined model properties to api model', () => {
        //Arrange
        const model: model.BarInfo = {
            _id: undefined,
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };

        //Act
        const result = mapFromBarInfoModelToApiModel(model);

        //Assert
        const expectedModel: apiModel.BarInfo = {
            id: '',
            infoA: '',
            infoB: '',
            infoC: '',
        }

        expect(result).toEqual(expectedModel);
    });

    it('should map properly undefined api model properties', () => {
        //Arrange
        const model: apiModel.BarInfo = {
            id: undefined,
            infoA: undefined,
            infoB: undefined,
            infoC: undefined,
        };

        //Act
        const result = mapFromBarInfoApiModelToModel(model);

        //Assert
        const expectedModel: model.BarInfo = {
            _id: '',
            infoA: '',
            infoB: '',
            infoC: '',
        }

        expect(result).toEqual(expectedModel);
    });
})