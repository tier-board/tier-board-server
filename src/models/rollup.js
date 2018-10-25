'use strict';

import mongoose from 'mongoose';

const RollupSchema = mongoose.Schema({
  //RollupID: { type: Schema.Types.ObjectID, ref:'Rollup' },
  tVarience: { type: String },
  tCompleted: { type: String },
  endOfDay: { type: String },
  areaVarience: { type: String},
  date: { type: String },
});

export default mongoose.model('Rollup', RollupSchema);