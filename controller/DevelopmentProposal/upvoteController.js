const Upvote = require('../../schemas/DevelopmentProposal/UpvoteSchema');
const Downvote = require('../../schemas/DevelopmentProposal/DownvoteSchema');

const getAllUpvotes = async (req, res, next) => {
  try {
    Upvote.find({ developmentProposalId: req.body.developmentProposalId }).exec(
      (err, upvotes) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, upvotes });
      }
    );
  } catch (error) {
    next(error);
  }
};

const addUpvote = async (req, res, next) => {
  try {
    const data = req.body;
    const upvote = new Upvote(data);

    // save the upvote information data in MongoDB
    upvote.save((err, result) => {
      if (err) return res.json({ success: false, err });

      // decrease the downVote by 1 if it is allready downvoted
      Downvote.deleteMany(data).exec((err, result) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
      });
    });
  } catch (error) {
    next(error);
  }
};

const removeUpvote = (req, res, next) => {
  try {
    Upvote.deleteMany(req.body).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUpvotes,
  addUpvote,
  removeUpvote,
};
