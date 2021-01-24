import { Document, model, mongo, Schema } from 'mongoose';
import { MenuCategory } from 'dals';

const portionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  price: { type: Schema.Types.Number, required: true },
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: {
    type: Schema.Types.String,
    required: true,
    index: true,
    unique: true,
  },
  visible: { type: Schema.Types.Boolean, required: true },
  description: { type: Schema.Types.String },
  portionTypeId: { type: Schema.Types.ObjectId, required: true },
  portions: [portionSchema],
  child: portionSchema,
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const menuCategorySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: Schema.Types.String, required: true },
  products: [productSchema],
  child: productSchema,
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

// Duplicate the ID field.
portionSchema
  .virtual('id')
  .get(function () {
    return this._id.toHexString();
  })
  .set(function (value) {
    if (!!value && typeof value === 'string')
      this._id = new mongo.ObjectID(value);
  });

productSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

menuCategorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
portionSchema.set('toJSON', {
  virtuals: true,
});

productSchema.set('toJSON', {
  virtuals: true,
});

menuCategorySchema.set('toJSON', {
  virtuals: true,
});

export const MenuCategoryContext = model<MenuCategory & Document>(
  'MenuCategory',
  menuCategorySchema
);
