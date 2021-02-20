import { createMockRepository } from 'core';
import { ProductPortion, ProductPortionType } from 'dals';
import { v4 as uuid4 } from 'uuid';

const productPortionTypeRepository = createMockRepository<ProductPortionType>(
  () => uuid4()
);

export const getProductPortionTypes = async (): Promise<
  Array<ProductPortionType>
> => productPortionTypeRepository.getCollection();

export const getProductPortionTypeById = async (
  id: string
): Promise<ProductPortionType> => productPortionTypeRepository.getItemById(id);

export const saveProductPortionType = async (
  productPortionType: ProductPortionType
): Promise<ProductPortionType> => {
  return productPortionTypeRepository.saveItem(productPortionType);
}

export const saveProductPortion = async (
  productPortion: ProductPortion,
  productPortionTypeId?: string
): Promise<ProductPortion> => {
  let productPortionType;
  if (!!productPortionTypeId) {
    productPortionType = productPortionTypeRepository.getItemById(
      productPortionTypeId
    );
  } else if (!!productPortion._id) {
    productPortionType = productPortionTypeRepository
      .getCollection()
      .find((t) => t.portions.some((p) => p._id));
  }
  if (!!productPortionType) {
    const productPortionRepository = createMockRepository<ProductPortion>(
      () => uuid4(),
      productPortionType.portions
    );
    const savedPortion = productPortionRepository.saveItem(productPortion);
    const result = productPortionTypeRepository.saveItem({
      ...productPortionType,
      portions: productPortionRepository.getCollection(),
    });
    return !!result ? savedPortion : null;
  }

  return null;
};

export const deleteProductPortionType = async (id: string): Promise<Array<ProductPortionType>> =>
  productPortionTypeRepository.deleteItem(id);

export const deleteProductPortion = async (
  id: string
): Promise<Array<ProductPortion>> => {
  if (!id) throw 'id cannot be empty';
  const types = await getProductPortionTypes();
  const type = types.find((t) => t.portions.some((p) => p._id === id));

  if (!!type) {
    const updatedType = productPortionTypeRepository.saveItem({
      ...type,
      portions: type.portions.filter((p) => p._id !== id),
    });
    return !!updatedType ? [...updatedType.portions] : [];
  }

  return [];
};
