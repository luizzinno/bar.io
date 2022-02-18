import * as model from 'dals';
import * as apiModel from './restaurant.api-model';
import { reduceCategoryEntryListToRationDefinitionList } from './restaurant.mappers';

describe('restaurant.mapper', () => {
  describe('reduceCategoryEntryListToRationDefinitionList', () => {
    it('should return empty array when it feeds with undefined', () => {
      // Arrange
      const data: apiModel.CategoryEntry[] = undefined;
      // Act
      const result: model.RationDefinition[] =
        reduceCategoryEntryListToRationDefinitionList(data);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array when it feeds with null', () => {
      // Arrange
      const data: apiModel.CategoryEntry[] = null;
      // Act
      const result: model.RationDefinition[] =
        reduceCategoryEntryListToRationDefinitionList(data);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array when it feeds with empty array', () => {
      // Arrange
      const data: apiModel.CategoryEntry[] = [];
      // Act
      const result: model.RationDefinition[] =
        reduceCategoryEntryListToRationDefinitionList(data);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array when it feeds with a categoryEntry without priceByRation', () => {
      // Arrange
      const data: apiModel.CategoryEntry[] = [
        {
          name: 'category-test',
          items: [
            {
              name: 'item-test',
              price: 2,
            },
          ],
        },
      ];
      // Act
      const result: model.RationDefinition[] =
        reduceCategoryEntryListToRationDefinitionList(data);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return an item when it feeds with a categoryEntry with priceByRation', () => {
      // Arrange
      const data: apiModel.CategoryEntry[] = [
        {
          name: 'category-test',
          items: [
            {
              name: 'item-test',
              priceByRation: {
                rationName: 'ration-test',
                rationsTypes: [
                  {
                    unit: 'ration-type',
                    price: 2,
                  },
                ],
              },
            },
          ],
        },
      ];
      // Act
      const result: model.RationDefinition[] =
        reduceCategoryEntryListToRationDefinitionList(data);
      // Assert
      expect(result).toEqual([
        {
          name: 'ration-test',
          units: ['ration-type'],
        },
      ] as model.RationDefinition[]);
    });
  });
  it('should return an item when it feeds with a categoryEntry with priceByRation and two rationsTypes', () => {
    // Arrange
    const data: apiModel.CategoryEntry[] = [
      {
        name: 'category-test',
        items: [
          {
            name: 'item-test',
            priceByRation: {
              rationName: 'ration-test',
              rationsTypes: [
                {
                  unit: 'ration-type1',
                  price: 2,
                },
                {
                  unit: 'ration-type2',
                  price: 2,
                },
              ],
            },
          },
        ],
      },
    ];
    // Act
    const result: model.RationDefinition[] =
      reduceCategoryEntryListToRationDefinitionList(data);
    // Assert
    expect(result).toEqual([
      {
        name: 'ration-test',
        units: ['ration-type1', 'ration-type2'],
      },
    ] as model.RationDefinition[]);
  });
  it('should return an item when it feeds with a categoryEntry with priceByRation and two rationsTypes', () => {
    // Arrange
    const data: apiModel.CategoryEntry[] = [
      {
        name: 'category-test',
        items: [
          {
            name: 'item-test1',
            priceByRation: {
              rationName: 'ration-test',
              rationsTypes: [
                {
                  unit: 'ration-type1',
                  price: 2,
                },
                {
                  unit: 'ration-type2',
                  price: 2,
                },
              ],
            },
          },
        ],
      },
    ];
    // Act
    const result: model.RationDefinition[] =
      reduceCategoryEntryListToRationDefinitionList(data);
    // Assert
    expect(result).toEqual([
      {
        name: 'ration-test',
        units: ['ration-type1', 'ration-type2'],
      },
    ] as model.RationDefinition[]);
  });
});
