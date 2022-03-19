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
  proposalDate: String,
  upvotes: Array,
  downvotes: Array,
});

module.exports = mongoose.model('Development', DevelopmentSchema);
