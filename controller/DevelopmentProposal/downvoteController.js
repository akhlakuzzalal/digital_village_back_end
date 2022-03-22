const DownVote = require('../../schemas/DevelopmentProposal/DownvoteSchema');
const UpVote = require('../../schemas/DevelopmentProposal/UpvoteSchema');

const getAllDownvotes = async (req, res, next) => {
  try {
    DownVote.find({
      developmentProposalId: req.body.developmentProposalId,
    }).exec((err, downvotes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, downvotes });
    });
  } catch (error) {
    next(error);
  }
};

const addDownvote = async (req, res, next) => {
  try {
    const data = req.body;
    //save the downvote information data in MongoDB
    const response = await DownVote.create(data);

    // if like button is allready clicked then decrease it
    UpVote.deleteMany(data).exec((err, downVoteResult) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

const removeDownvote = (req, res, next) => {
  try {
    DownVote.deleteMany(req.body).exec((err, result) => {
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
