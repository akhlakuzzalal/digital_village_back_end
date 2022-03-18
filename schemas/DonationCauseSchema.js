const mongoose = require('mongoose');

const donationCauseSchema = new mongoose.Schema({
  requesterName: String,
  requesterEmail: String,
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  raised: {
    type: Number,
  },
  donars: Array,
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('donationCause', donationCauseSchema);
