const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
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
    bannerImg: Object,
    publishDate: {
      type: String,
      required: true,
    },
    publishTime: {
      type: String,
      required: true,
    },
    rating: String,
    comments: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('News', NewsSchema);
