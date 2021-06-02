import { createMockRepository } from 'common/helpers';
import { ProductPortion, ProductPortionType } from 'dals';
import { menuCategoryContext, menuCategoryRepository } from 'dals/menu-category';
import { v4 as uuid4 } from 'uuid';

const productPortionTypeRepository = createMockRepository<ProductPortionType>(
  () => uuid4()
);

export const getProductPortionTypes = async (): Promise<
  ProductPortionType[]
> => productPortionTypeRepository.getCollection();

export const getProductPortionTypeById = async (
  id: string
): Promise<ProductPortionType> => productPortionTypeRepository.getItemById(id);

export const saveProductPortionType = async (
  productPortionType: ProductPortionType
): Promise<void> => productPortionTypeRepository.saveItem(productPortionType);

export const saveProductPortionTypes = async (
  productPortionTypes: ProductPortionType[]
): Promise<void> => productPortionTypeRepository.setItems(productPortionTypes);

export const saveProductPortion = async (
  productPortion: ProductPortion,
  productPortionTypeId?: string
): Promise<void> => {
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
    productPortionRepository.saveItem(productPortion);
    productPortionTypeRepository.saveItem({
      ...productPortionType,
      portions: productPortionRepository.getCollection(),
    });
  }
};

export const deleteProductPortionType = async (id: string): Promise<void> => {
  const menuCategories = await menuCategoryRepository.getMenuCategories();
  if (!menuCategories.some(mc => mc.products.some(p => p.portionTypeId === id)))
    productPortionTypeRepository.deleteItem(id);
}

export const deleteProductPortion = async (id: string): Promise<void> => {
  const menuCategories = await menuCategoryRepository.getMenuCategories();
  if (!menuCategories.some(mc => mc.products.some(p => p.portions.some(p => p._id === id)))) {
    const types = await getProductPortionTypes();
    const type = types.find((t) => t.portions.some((p) => p._id === id));

    if (!!type) {
      productPortionTypeRepository.saveItem({
        ...type,
        portions: type.portions.filter((p) => p._id !== id),
      });
    }
  }
};
