'use strict';

import mongoose from 'mongoose';

const CostSchema = mongoose.Schema({
//  costID: { type:Schema.Types.ObjectID, ref:'Cost' },
  station: { type: String },
  task: { type: String },
  date: { type: String },
});

export default mongoose.model('Cost', CostSchema);