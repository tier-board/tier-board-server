'use strict';

import mongoose from 'mongoose';

const MoraleSchema = mongoose.Schema({
// moraleID: { type: Schema.Types.ObjectID, ref:'Morale' },
  station: { type: String },
  task: { type: String },
  date: { type: String },
});

export default mongoose.model('Morale', MoraleSchema);