'use strict';

import mongoose from 'mongoose';

const SafetySchema = mongoose.Schema({
  //safetyID: { type: Schema.Types.ObjectID, ref:'Safety' },
  incidents: { type: String },
  concerns: { type: String },
  response: { type: String },
  date: { type: String },
});

export default mongoose.model('Safety', SafetySchema);