const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpvoteSchema = Schema(
  {
    uId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    developmentProposalId: {
      type: Schema.Types.ObjectId,
      ref: 'developmentProposal',
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('upvote', UpvoteSchema);
