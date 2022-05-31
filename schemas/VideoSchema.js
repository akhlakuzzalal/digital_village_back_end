const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    email: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },
    videoInfo: {
      type: { public_id: String, url: String },
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    rating: String,
    isVerified: {
      type: Boolean,
      required: true,
    },
    tags: {
      type: Array,
      requried: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    lastUpdateDate: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model('Video', videoSchema);
