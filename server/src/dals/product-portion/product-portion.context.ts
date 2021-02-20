import { Document, model, Schema } from 'mongoose';
import { ProductPortionType } from 'dals';

const productPortionSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
});

const productPortionTypeSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  portions: [productPortionSchema],
});

export const ProductPortionTypeContext = model<ProductPortionType & Document>(
  'ProductPortionType',
  productPortionTypeSchema
);
