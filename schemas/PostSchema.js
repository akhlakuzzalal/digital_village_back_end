const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    loves: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Post', PostSchema);
