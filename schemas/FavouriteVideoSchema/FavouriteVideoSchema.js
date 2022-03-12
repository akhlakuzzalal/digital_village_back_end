const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteVideoSchema = Schema(
  {
    uId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('favouriteVideo', favouriteVideoSchema);
