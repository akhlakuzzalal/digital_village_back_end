const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationCauseSchema = new mongoose.Schema(
  {
    requesterName: String,
    requesterEmail: String,
    title: {
      type: String,
      required: true,
    },
    image: Object,
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
      required: true,
    },
    donars: [
      {
        donarId: String,
        amount: Number,
      },
    ],
    date: {
      type: String,
      required: true,
    },
    isVerified: Boolean,
  },
  { versionKey: false }
);

module.exports = mongoose.model('donationCause', donationCauseSchema);
