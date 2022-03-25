const mongoose = require('mongoose');

const UserReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    photo: Object,
  },
  { versionKey: false }
);

module.exports = mongoose.model('UserReview', UserReviewSchema);
