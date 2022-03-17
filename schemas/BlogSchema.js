const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bannerImg: Object,
    about: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    publishDate: {
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

module.exports = mongoose.model('Blog', BlogSchema);
