'use strict';

import mongoose, {Schema} from 'mongoose';

const SafetySchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  incidents: { type: String },
  concerns: { type: String },
  response: { type: String },
  date: { type: String },
});

export default mongoose.model('Safety', SafetySchema);