const Upvote = require('../../schemas/DevelopmentProposal/UpvoteSchema');

const getAllUpvotes = async (req, res, next) => {
  try {
    const { developmentProposalId } = req.body;

    const allUpvotes = await Upvote.find({ developmentProposalId });
    res.json(allUpvotes);
  } catch (error) {
    next(error);
  }
};

const addUpvote = async (req, res, next) => {
  try {
    const { uId, developmentProposalId } = req.body;

    let data = { uId, developmentProposalId };

    const upvote = new Upvote(data);

    // save the upvote information data in MongoDB
    upvote.save((err, result) => {
      if (err) return res.json({ success: false, err });

      // decrease the upVote by 1 if it is allready upvoted
      Upvote.findOneAndDelete(data).exec((err, result) => {
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
    const { uId, developmentProposalId } = req.body;
    let query = { uId, developmentProposalId };

    Upvote.findOneAndDelete(query).exec((err, result) => {
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
