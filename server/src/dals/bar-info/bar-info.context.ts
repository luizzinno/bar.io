import { Document, model, Schema } from 'mongoose';
import { BarInfo } from 'dals';

const barInfoSchema = new Schema({
  infoA: { type: Schema.Types.String, required: true },
  infoB: Schema.Types.String,
  infoC: Schema.Types.String, 
});

export const barInfoContext = model<BarInfo & Document>('BarInfo', barInfoSchema);
