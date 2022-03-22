const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DownvoteSchema = Schema(
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

module.exports = mongoose.model('downvote', DownvoteSchema);
