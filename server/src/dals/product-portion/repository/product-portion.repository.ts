import {
  ProductPortion,
  ProductPortionType,
  ProductPortionTypeContext,
} from 'dals';
import { UpdateQuery } from 'mongoose';

export const getProductPortionTypes = async (): Promise<
  Array<ProductPortionType>
> => ProductPortionTypeContext.find();

export const getProductPortionTypeById = async (
  id: string
): Promise<ProductPortionType> => {
  if (!!!id) throw 'id cannot be empty';
  return await ProductPortionTypeContext.findById(id);
};

export const saveProductPortionType = async (
  productPortionType: ProductPortionType
): Promise<ProductPortionType> => {
  if (!!!productPortionType)
    throw 'productPortionType cannot be null or undefined';
  if (!!!productPortionType.id)
    return await ProductPortionTypeContext.create(productPortionType);
  else {
    return await ProductPortionTypeContext.findByIdAndUpdate(
      productPortionType.id,
      productPortionType,
      {
        new: true,
        upsert: false,
        overwrite: true,
      }
    );
  }
};

export const saveProductPortion = async (
  productPortion: ProductPortion,
  productPortionTypeId?: string
): Promise<ProductPortion> => {
  if (!!!productPortion) throw 'productPortioncannot be null or undefined';
  let result: ProductPortionType;
  if (!!productPortionTypeId) {
    if (!!productPortion.id) {
      result = await ProductPortionTypeContext.findOneAndUpdate(
        {
          _id: productPortionTypeId,
          portions: { $elemMatch: { _id: { $eq: productPortion.id } } },
        },
        {
          $set: {
            'portions.$': { ...productPortion, _id: productPortion.id },
          },
        },
        {
          new: true,
          upsert: false,
          overwrite: true,
        }
      );
    } else {
      result = await ProductPortionTypeContext.findOneAndUpdate(
        { _id: productPortionTypeId },
        {
          $push: {
            portions: { ...productPortion, _id: productPortion.id },
          },
        },
        {
          new: true,
          upsert: false,
          overwrite: true,
        }
      );
    }
  } else {
    result = await ProductPortionTypeContext.findOneAndUpdate(
      { portions: { $elemMatch: { _id: { $eq: productPortion.id } } } },
      {
        $set: {
          'portions.$': {...productPortion, _id: productPortion.id },
        },
      },
      {
        new: true,
        upsert: false,
        overwrite: true
      }
    );
  }
  return result?.portions.find((p) => p.name === productPortion.name) ?? null;
};

export const deleteProductPortionType = async (
  id: string
): Promise<Array<ProductPortionType>> => {
  if (!!!id) throw 'id cannot be empty';
  await ProductPortionTypeContext.findByIdAndDelete(id);
  return await getProductPortionTypes();
};

export const deleteProductPortion = async (
  id: string
): Promise<Array<ProductPortion>> => {
  if (!!!id) throw 'id cannot be empty';
  const result = await ProductPortionTypeContext.findOneAndUpdate(
    { portions: { $elemMatch: { _id: { $eq: id } } } },
    {
      $pull: {
        portions: { _id: id },
      },
    } as UpdateQuery<ProductPortionType & Document>,
    {
      new: true,
    }
  );

  return result?.portions ?? null;
};
