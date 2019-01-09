'use strict';

import mongoose, {Schema} from 'mongoose';

const MoraleSchema = mongoose.Schema({
  _id: { type:Schema.Types.ObjectId },
  station: { type: String },
  task: { type: String },
  date: { type: String },
});

export default mongoose.model('Morale', MoraleSchema);