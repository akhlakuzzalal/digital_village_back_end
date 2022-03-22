const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonationRequestSchema = new mongoose.Schema(
  {
    requesterName: String,
    requesterEmail: String,
    name: {
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
    phone: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    pay: {
      type: String,
      // required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('donationHelpRequst', DonationRequestSchema);
