'use strict';

import mongoose from 'mongoose';

const DeliverySchema = mongoose.Schema({
  //deliveryID: { type: Schema.Types.ObjectID, ref:'Delivery' },
  station: { type: String },
  issue: { type: String },
  countermeasure: { type: String },
  date: { type: String },
});

export default mongoose.model('Delivery', DeliverySchema);