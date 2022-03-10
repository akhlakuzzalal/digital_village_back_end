const mongoose = require('mongoose');

const DevelopmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImg: String,
  content: String,
  constructionDate: String,
  rating: String,
  comments: Array,
  upvotes: Array,
  downvotes: Array,
});

module.exports = mongoose.model('Development', DevelopmentSchema);
