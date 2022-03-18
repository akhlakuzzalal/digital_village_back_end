const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    loves: Array,
    photo: Object,
    time: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Post', PostSchema);
