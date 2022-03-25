const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = Schema(
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
    blogId: {
      type: Schema.Types.ObjectId,
      ref: 'Blog',
    },
    socialPostId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Like', LikeSchema);
