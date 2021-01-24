import { Document, model, Schema } from 'mongoose';
import { ProductPortionType } from 'dals';

const productPortionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: Schema.Types.String, required: true },
});

const productPortionTypeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: Schema.Types.String, required: true },
  portions: [productPortionSchema],
  child: productPortionSchema,
});

// Duplicate the ID field.
productPortionSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

productPortionTypeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
productPortionSchema.set('toJSON', {
  virtuals: true,
});

productPortionTypeSchema.set('toJSON', {
  virtuals: true,
});

export const ProductPortionTypeContext = model<ProductPortionType & Document>(
  'ProductPortionType',
  productPortionTypeSchema
);
