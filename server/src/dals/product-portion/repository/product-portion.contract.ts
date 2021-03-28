import { ProductPortion, ProductPortionType } from 'dals';

export interface ProductPortionTypeRepositoryContract {
  getProductPortionTypes: () => Promise<ProductPortionType[]>;
  getProductPortionTypeById: (id: string) => Promise<ProductPortionType>;
  saveProductPortionType: (
    type: ProductPortionType
  ) => Promise<void>;
  saveProductPortionTypes: (portionTypes: ProductPortionType[]) => Promise<void>;
  saveProductPortion: (portion: ProductPortion, typeId?: string) => Promise<void>;
  deleteProductPortionType: (id: string) => Promise<void>;
  deleteProductPortion: (id: string) => Promise<void>;
}
