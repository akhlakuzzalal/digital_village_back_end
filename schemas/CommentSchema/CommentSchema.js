const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    commenter: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    postId: Schema.Types.ObjectId,
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Comment', commentSchema);
