const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    post: String,
    loves: Array,
    photo: { type: String },
    time: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Post', PostSchema);
