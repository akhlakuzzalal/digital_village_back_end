const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoLikeSchema = Schema(
  {
    uId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('videoLike', videoLikeSchema);
