import {
  ProductPortion,
  ProductPortionType,
  ProductPortionTypeContext,
} from 'dals';
import { mongo, UpdateQuery } from 'mongoose';

export const getProductPortionTypes = async (): Promise<
  Array<ProductPortionType>
> => ProductPortionTypeContext.find().lean();

export const getProductPortionTypeById = async (
  id: string
): Promise<ProductPortionType> => {
  if (!id) throw 'id cannot be empty';
  return await ProductPortionTypeContext.findById(id).lean();
};

export const saveProductPortionType = async (
  productPortionType: ProductPortionType
): Promise<ProductPortionType> => {
  if (!productPortionType)
    throw 'productPortionType cannot be null or undefined';
  if (!productPortionType._id) productPortionType._id = new mongo.ObjectID();
  return await ProductPortionTypeContext.findByIdAndUpdate(
    productPortionType._id,
    productPortionType,
    {
      new: true,
      upsert: true,
    }
  ).lean();
};

export const saveProductPortion = async (
  productPortion: ProductPortion,
  productPortionTypeId?: string
): Promise<ProductPortion> => {
  if (!productPortion) throw 'productPortioncannot be null or undefined';
  let result: ProductPortionType;
  if (!!productPortionTypeId) {
    if (!!productPortion._id) {
      result = await ProductPortionTypeContext.findOneAndUpdate(
        {
          _id: productPortionTypeId,
          portions: { $elemMatch: { _id: { $eq: productPortion._id } } },
        },
        {
          $set: {
            'portions.$': { ...productPortion, _id: productPortion._id },
          },
        },
        {
          new: true,
        }
      ).lean();
    } else {
      result = await ProductPortionTypeContext.findOneAndUpdate(
        { _id: productPortionTypeId },
        {
          $push: {
            portions: { ...productPortion, _id: productPortion._id },
          },
        },
        {
          new: true,
        }
      ).lean();
    }
  } else {
    result = await ProductPortionTypeContext.findOneAndUpdate(
      { portions: { $elemMatch: { _id: { $eq: productPortion._id } } } },
      {
        $set: {
          'portions.$': { ...productPortion, _id: productPortion._id },
        },
      },
      {
        new: true,
      }
    ).lean();
  }
  return result?.portions.find((p) => p.name === productPortion.name) ?? null;
};

export const deleteProductPortionType = async (
  id: string
): Promise<Array<ProductPortionType>> => {
  if (!id) throw 'id cannot be empty';
  await ProductPortionTypeContext.findByIdAndDelete(id);
  return await getProductPortionTypes();
};

export const deleteProductPortion = async (
  id: string
): Promise<Array<ProductPortion>> => {
  if (!id) throw 'id cannot be empty';
  const _id = new mongo.ObjectID(id);
  const result = await ProductPortionTypeContext.findOneAndUpdate(
    { portions: { $elemMatch: { _id: { $eq: { _id } } } } },
    {
      $pull: {
        portions: { _id: _id },
      },
    },
    {
      new: true,
    }
  ).lean();
  return result?.portions ?? null;
};
