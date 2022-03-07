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
  bannerImg: Object,
  content: {
    type: String,
    required: true,
  },
  
  constructionDate: {
    type: String,
    required: true,
  },
  
  rating: String,
  comments: Array,
});

module.exports = mongoose.model('Development', DevelopmentSchema);
