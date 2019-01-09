'use strict';

import mongoose, {Schema} from 'mongoose';

const CostSchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  station: { type: String },
  task: { type: String },
  date: { type: String },
});

export default mongoose.model('Cost', CostSchema);