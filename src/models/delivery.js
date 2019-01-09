'use strict';

import mongoose, {Schema} from 'mongoose';

const DeliverySchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  station: { type: String },
  issue: { type: String },
  countermeasure: { type: String },
  date: { type: String },
});

export default mongoose.model('Delivery', DeliverySchema);