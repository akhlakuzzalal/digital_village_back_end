const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  bannerImg,
  content: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  rating: {
    required: true,
  },
  comment: Array,
});

module.exports = mongoose.model('Blog', BlogSchema);
