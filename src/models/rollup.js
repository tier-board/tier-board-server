'use strict';

import mongoose, {Schema} from 'mongoose';

const RollupSchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  tVarience: { type: String },
  tCompleted: { type: String },
  endOfDay: { type: String },
  areaVarience: { type: String},
  date: { type: String },
});

export default mongoose.model('Rollup', RollupSchema);