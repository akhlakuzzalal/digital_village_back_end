const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Review', reviewSchema);
