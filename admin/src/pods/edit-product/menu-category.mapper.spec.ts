import * as apiModel from 'core/api';
import { mapMenuCategoryListFromApiToViewModel } from './menu-category.mapper';
import * as viewModel from './menu-category.vm';

describe('Menu category mappers tests', () => {
  it('should map to a view model when a valid api models are passed', () => {
    //Arrange
    const models: apiModel.MenuCategory[] = [
      {
        id: '10',
        name: 'Test category I',
        products: [
          {
            id: '21',
            name: 'Test product I',
            description: 'Description 1',
            portionTypeId: '',
            portions: [],
            visible: true,
          },
        ],
      },
      {
        id: '11',
        name: 'Test category II',
        products: [
          {
            id: '25',
            name: 'Test product II',
            description: 'Description 2',
            portionTypeId: '',
            portions: [],
            visible: false,
          },
        ],
      },
    ];

    //Act
    const result = mapMenuCategoryListFromApiToViewModel(models);

    //Assert
    const expectedResult: viewModel.MenuCategory[] = [
      {
        id: '10',
        name: 'Test category I',
      },
      {
        id: '11',
        name: 'Test category II',
      },
    ];

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to an empty view model when an empty api model list is passed', () => {
    //Arrange
    const models: apiModel.MenuCategory[] = [];

    //Act
    const result = mapMenuCategoryListFromApiToViewModel(models);

    //Assert
    expect(result).toStrictEqual([]);
  });
  it('should map to an empty view model when an undefined api model list is passed', () => {
    //Arrange
    const models: apiModel.MenuCategory[] = undefined;

    //Act
    const result = mapMenuCategoryListFromApiToViewModel(models);

    //Assert
    expect(result).toStrictEqual([]);
  });
  it('should map to an empty view model when a null api model list is passed', () => {
    //Arrange
    const models: apiModel.MenuCategory[] = null;

    //Act
    const result = mapMenuCategoryListFromApiToViewModel(models);

    //Assert
    expect(result).toStrictEqual([]);
  });
});
