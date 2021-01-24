import { MenuCategory, MenuCategoryContext, Product } from 'dals';
import { UpdateQuery } from 'mongoose';

export const getMenuCategories = async (): Promise<Array<MenuCategory>> =>
  await MenuCategoryContext.find();

export const getMenuCategoryById = async (
  id: string
): Promise<MenuCategory> => {
  if (!!!id) throw 'id cannot be empty';
  return await MenuCategoryContext.findById(id);
};

export const getMenuCategoryByProductId = async (
  productId: string
): Promise<MenuCategory> => {
  if (!!!productId) throw 'productId cannot be empty';
  return await MenuCategoryContext.findOne({
    products: { $elemMatch: [{ _id: { $eq: productId } }] },
  });
};

export const saveMenuCategory = async (
  menuCategory: MenuCategory
): Promise<MenuCategory> => {
  if (!!!menuCategory) throw 'menuCategory cannot be null or undefined';
  if (!!!menuCategory.id) return await MenuCategoryContext.create(menuCategory);

  return await MenuCategoryContext.findByIdAndUpdate(
    menuCategory.id,
    menuCategory,
    {
      new: true,
      upsert: false,
      overwrite: true,
    }
  );
};

export const deleteMenuCategory = async (
  id: string
): Promise<Array<MenuCategory>> => {
  if (!!!id) throw 'id cannot be empty';
  await MenuCategoryContext.findByIdAndDelete(id);
  return await getMenuCategories();
};

export const getProductById = async (id: string): Promise<Product> => {
  if (!!!id) throw 'id cannot be empty';
  const result: MenuCategory = await MenuCategoryContext.findOne(
    { products: { $elemMatch: { _id: { $eq: id } } } },
    { products: { $elemMatch: { _id: { $eq: id } } } }
  );

  return !!result ? result.products[0] : null;
};

export const saveProduct = async (
  product: Product,
  categoryId?: string
): Promise<Product> => {
  if (!!!product) throw 'product cannot be null or undefined';
  let result: MenuCategory;
  if (!!categoryId) {
    if (!!product.id) {
      result = await MenuCategoryContext.findOneAndUpdate(
        {
          _id: categoryId,
          products: { $elemMatch: { _id: { $eq: product.id } } },
        },
        {
          $set: {
            'products.$': { ...product, _id: product.id },
          },
        },
        {
          new: true,
          overwrite: true,
        }
      );
    } else {
      result = await MenuCategoryContext.findByIdAndUpdate(
        categoryId,
        {
          $push: {
            products: product,
          },
        },
        {
          new: true,
          upsert: false,
        }
      );
    }
  } else {
    result = await MenuCategoryContext.findOneAndUpdate(
      { products: { $elemMatch: { _id: { $eq: product.id } } } },
      {
        $set: {
          'products.$': { ...product, _id: product.id },
        },
      },
      {
        new: true,
        upsert: false,
      }
    );
  }
  return result?.products.find((p) => p.name === product.name) ?? null;
};

export const saveProducts = async (
  categoryId: string,
  products: Array<Product>
): Promise<Array<Product>> => {
  if (!!!categoryId) throw 'categoryId cannot be empty';
  if (!!!products) throw 'products cannot be null or undefined';
  const updatedProducts = products.map((p) => ({ ...p, _id: p.id }));
  const result = await MenuCategoryContext.findOneAndUpdate(
    {
      _id: categoryId,
    },
    {
      $set: {
        products: [...updatedProducts],
      },
    },
    {
      new: true,
      upsert: false,
      overwrite: true,
    }
  );

  return result?.products ?? null;
};

export const deleteProduct = async (id: string): Promise<Array<Product>> => {
  if (!!!id) throw 'id cannot be empty';
  const result = await MenuCategoryContext.findOneAndUpdate(
    { products: { $elemMatch: { _id: { $eq: id } } } },
    {
      $pull: {
        products: { _id: { $eq: id } },
      },
    } as UpdateQuery<MenuCategory & Document>,
    {
      new: true,
    }
  );

  return result?.products ?? null;
};

export const removeProductPortionFromProducts = async (
  productPortionId: string
): Promise<boolean> => {
  const result = await MenuCategoryContext.updateMany(
    {
      products: {
        $elemMatch: {
          portions: { $elemMatch: { _id: { $eq: productPortionId } } },
        },
      },
    },
    {
      $pull: {
        'products.$.portions': { _id: productPortionId },
      },
    }
  );
  return !!result.nModified;
};

export const removeProductPortionTypeFromProducts = async (
  productPortionTypeId: string
): Promise<boolean> => {
  const result = await MenuCategoryContext.updateMany(
    {
      products: {
        $elemMatch: {
          portionTypeId: { $eq: productPortionTypeId } ,
        },
      },
    },
    {
      $set: {
        'products.$.portionTypeId': null,
        'products.$.portions': [],
      },
    }
  );
  return !!result.nModified;
};
