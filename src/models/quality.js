'use strict';

import mongoose from 'mongoose';

const QualitySchema = mongoose.Schema({
  //qualityID: { type: Schema.Types.ObjectID, ref:'Quality' },
  station: { type: String },
  issue: { type: String },
  countermeasure: { type: String },
  date: { type: String },
});

export default mongoose.model('Quality', QualitySchema);