const mongoose = require('mongoose');

const DevelopmentProposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
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
    imageInfo: {
      type: { url: String, public_id: String },
      required: true,
    },
    proposalDate: String,
    isAccepted: Boolean,
    isRejected: Boolean,
  },
  { versionKey: false }
);

module.exports = mongoose.model(
  'developmentProposal',
  DevelopmentProposalSchema
);
