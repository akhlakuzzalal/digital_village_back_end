const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoDislikeSchema = Schema(
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
  { timestamps: true }
);

module.exports = mongoose.model('videoDislike', videoDislikeSchema);
