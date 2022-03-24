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
    image: Object,
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
