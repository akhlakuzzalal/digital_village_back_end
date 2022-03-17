const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = Schema(
  {
    uId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: 'Blog',
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('favourite', favouriteSchema);
