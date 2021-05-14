import * as apiModel from 'core/api/product-portions/product-portions.model';
import {
  mapProductPortionListFromApiToViewModel,
  mapProductPortionTypeListFromApiToViewModels,
} from './product-portion.mapper';
import * as viewModel from './product-portion.vm';

describe('ProductPortionType mapper tests', () => {
  it('should map to api models when passing valid view models', () => {
    //Arrange
    const apiModels: apiModel.ProductPortionType[] = [
      {
        id: '1',
        name: 'Type I',
        portions: [
          {
            id: '1',
            name: 'Portion I',
          },
          {
            id: '2',
            name: 'Portion II',
          },
        ],
      },
      {
        id: '2',
        name: 'Type II',
        portions: [
          {
            id: '1',
            name: 'Portion I',
          },
          {
            id: '2',
            name: 'Portion II',
          },
        ],
      },
    ];

    //Act
    const viewModels = mapProductPortionTypeListFromApiToViewModels(apiModels);

    //Assert
    const expectedViewModels: viewModel.ProductPortionType[] = [
      {
        id: '1',
        name: 'Type I',
      },
      {
        id: '2',
        name: 'Type II',
      },
    ];

    expect(viewModels).toStrictEqual(expectedViewModels);
  });
});

describe('ProductPortion mapper tests', () => {
  it('should map to api models when passing valid view models', () => {
    //Arrange
    const apiModels: apiModel.ProductPortion[] = [
      {
        id: '1',
        name: 'Type I',
      },
      {
        id: '2',
        name: 'Type II',
      },
    ];

    //Act
    const viewModels = mapProductPortionListFromApiToViewModel(apiModels);

    //Assert
    const expectedViewModels: viewModel.ProductPortion[] = [
      {
        id: '1',
        name: 'Type I',
        price: 0,
      },
      {
        id: '2',
        name: 'Type II',
        price: 0,
      },
    ];

    expect(viewModels).toStrictEqual(expectedViewModels);
  });
});
