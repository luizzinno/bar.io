import { ProductPortion, ProductPortionType } from 'dals';

export interface ProductPortionTypeRepositoryContract {
  getProductPortionTypes: () => Promise<Array<ProductPortionType>>;
  getProductPortionTypeById: (id: string) => Promise<ProductPortionType>;
  saveProductPortionType: (
    type: ProductPortionType
  ) => Promise<ProductPortionType>;
  saveProductPortion: (portion: ProductPortion, typeId?: string) => Promise<ProductPortion>;
  deleteProductPortionType: (id: string) => Promise<Array<ProductPortionType>>;
  deleteProductPortion: (id: string) => Promise<Array<ProductPortion>>;
}
