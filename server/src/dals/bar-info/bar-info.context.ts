import { Document, model, Schema } from 'mongoose';
import { BarInfo } from 'dals';

const barInfoSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  infoA: { type: Schema.Types.String, required: true },
  infoB: Schema.Types.String,
  infoC: Schema.Types.String,
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now
  },  
});

// Duplicate the ID field.
barInfoSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
barInfoSchema.set('toJSON', {
  virtuals: true
});

export const BarInfoContext = model<BarInfo & Document>('BarInfo', barInfoSchema);
