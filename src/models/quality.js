'use strict';

import mongoose, {Schema} from 'mongoose';

const QualitySchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  station: { type: String },
  issue: { type: String },
  countermeasure: { type: String },
  date: { type: String },
});

export default mongoose.model('Quality', QualitySchema);