const mongoose = require('mongoose');

const DevelopmentProposalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: Object,
  proposalDate: String,
  upvotes: Array,
  downvotes: Array,
});

module.exports = mongoose.model(
  'DevelopmentProposal',
  DevelopmentProposalSchema
);
