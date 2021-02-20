import { MenuCategory, MenuCategoryContext, Product } from 'dals';
import { mongo, UpdateQuery } from 'mongoose';

export const getMenuCategories = async (): Promise<Array<MenuCategory>> =>
  await MenuCategoryContext.find().lean();

export const getMenuCategoryById = async (
  id: string
): Promise<MenuCategory> => {
  if (!id) throw 'id cannot be empty';
  return await MenuCategoryContext.findById(id).lean();
};

export const getMenuCategoryByProductId = async (
  productId: string
): Promise<MenuCategory> => {
  if (!productId) throw 'productId cannot be empty';
  return await MenuCategoryContext.findOne({
    products: { $elemMatch: [{ _id: { $eq: productId } }] },
  }).lean();
};

export const saveMenuCategory = async (
  menuCategory: MenuCategory
): Promise<MenuCategory> => {
  if (!menuCategory) throw 'menuCategory cannot be null or undefined';
  if (!menuCategory._id) menuCategory._id = new mongo.ObjectID();

  return await MenuCategoryContext.findByIdAndUpdate(
    menuCategory._id,
    menuCategory,
    {
      new: true,
      upsert: true,
    }
  ).lean();
};

export const deleteMenuCategory = async (
  id: string
): Promise<Array<MenuCategory>> => {
  if (!id) throw 'id cannot be empty';
  await MenuCategoryContext.findByIdAndDelete(id);
  return await getMenuCategories();
};

export const getProductById = async (id: string): Promise<Product> => {
  if (!id) throw 'id cannot be empty';
  const result: MenuCategory = await MenuCategoryContext.findOne(
    { products: { $elemMatch: { _id: { $eq: id } } } },
    { products: { $elemMatch: { _id: { $eq: id } } } }
  ).lean();

  return !!result ? result.products[0] : null;
};

export const saveProduct = async (
  product: Product,
  categoryId?: string
): Promise<Product> => {
  if (!product) throw 'product cannot be null or undefined';
  let result: MenuCategory;
  if (!!categoryId) {
    if (!!product._id) {
      result = await MenuCategoryContext.findOneAndUpdate(
        {
          _id: categoryId,
          products: { $elemMatch: { _id: { $eq: product._id } } },
        },
        {
          $set: {
            'products.$': { ...product, _id: product._id },
          },
        },
        {
          new: true,
        }
      ).lean();
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
        }
      ).lean();
    }
  } else {
    result = await MenuCategoryContext.findOneAndUpdate(
      { products: { $elemMatch: { _id: { $eq: product._id } } } },
      {
        $set: {
          'products.$': { ...product, _id: product._id },
        },
      },
      {
        new: true,        
      }
    ).lean();
  }
  return result?.products.find((p) => p.name === product.name) ?? null;
};

export const saveProducts = async (
  categoryId: string,
  products: Array<Product>
): Promise<Array<Product>> => {
  if (!categoryId) throw 'categoryId cannot be empty';
  if (!products) throw 'products cannot be null or undefined';
  const updatedProducts = products.map((p) => ({ ...p, _id: p._id }));
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
    }
  ).lean();

  return result?.products ?? null;
};

export const deleteProduct = async (id: string): Promise<Array<Product>> => {
  if (!id) throw 'id cannot be empty';
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
  ).lean();

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
  console.log(productPortionId);
  console.log(result);
  return !!result.nModified;
};

export const removeProductPortionTypeFromProducts = async (
  productPortionTypeId: string
): Promise<boolean> => {
  const result = await MenuCategoryContext.updateMany(
    {
      products: {
        $elemMatch: {
          portionTypeId: { $eq: productPortionTypeId },
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
