const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    post: String,
    loves: Array,
    imageInfo: {
      type: { public_id: String, url: String },
      required: true,
    },
    time: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Post', PostSchema);
