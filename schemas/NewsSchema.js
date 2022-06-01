const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageInfo: {
      type: { public_id: String, url: String },
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    publishTime: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
    rating: String,
    comments: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('News', NewsSchema);
