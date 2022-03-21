const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonationRequestSchema = new mongoose.Schema(
  {
    requesterName: String,
    requesterEmail: String,
    title: {
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
    pay: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    requesters: [
      {
        requesterId: String,
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

module.exports = mongoose.model('donationHelpRequst', DonationRequestSchema);
