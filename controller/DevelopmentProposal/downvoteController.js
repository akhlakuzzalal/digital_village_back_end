const DownVote = require('../../schemas/DevelopmentProposal/DownvoteSchema');
const UpVote = require('../../schemas/DevelopmentProposal/DownvoteSchema');

const getAllDownvotes = async (req, res, next) => {
  try {
    DownVote.find({ developmentProposalId }).exec((err, downvotes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, downvotes });
    });
  } catch (error) {
    next(error);
  }
};

const addDownvote = async (req, res, next) => {
  try {
    const { uId, developmentProposalId } = req.body;

    let data = { uId, developmentProposalId };

    const downvote = new DownVote(data);

    // save the downvote information data in MongoDB
    downvote.save((err, result) => {
      if (err) return res.json({ success: false, err });

      // decrease the upvote by 1 if it is allready upvoted
      UpVote.findOneAndDelete(data).exec((err, result) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
      });
    });
  } catch (error) {
    next(error);
  }
};

const removeDownvote = (req, res, next) => {
  try {
    const { uId, developmentProposalId } = req.body;
    let query = { uId, developmentProposalId };

    DownVote.findOneAndDelete(query).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDownvotes,
  addDownvote,
  removeDownvote,
};
