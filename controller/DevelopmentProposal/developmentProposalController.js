const DevelopmentProposal = require('../../schemas/DevelopmentProposal/DevelopmentProposalSchema');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');
const Upvotes = require('../../schemas/DevelopmentProposal/UpvoteSchema');
const Downvotes = require('../../schemas/DevelopmentProposal/DownvoteSchema');

const getAllDevelopmentProposal = async (req, res, next) => {
  try {
    let { email } = req.query;
    let allUpvotes = await Upvotes.find();
    let allDownVotes = await Downvotes.find();
    let allDevelopmentProposals = [];
    if (email) {
      allDevelopmentProposals = await DevelopmentProposal.find({ email });
    } else {
      allDevelopmentProposals = await DevelopmentProposal.find();
    }
    const allDevelopmentProposalsWithUpvote = allDevelopmentProposals.map(
      (d) => {
        const totalUpvotes = allUpvotes.filter((upvote) => {
          return upvote.developmentProposalId.toString() === d._id.toString();
        }).length;
        const totalDownVotes = allDownVotes.filter((downvote) => {
          return downvote.developmentProposalId.toString() === d._id.toString();
        }).length;
        return {
          _id: d._id,
          name: d.name,
          email: d.email,
          title: d.title,
          description: d.description,
          image: d.image,
          proposalDate: d.proposalDate,
          isAccepted: d.isAccepted,
          isRejected: d.isRejected,
          upvotes: totalUpvotes,
          downvotes: totalDownVotes,
        };
      }
    );

    res.json(allDevelopmentProposalsWithUpvote);
  } catch (error) {
    next(error);
  }
};

const addNewDevelopmentProposal = async (req, res, next) => {
  let newDevelopmentProposal = {};
  if (req.file) {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };

    newDevelopmentProposal = {
      ...JSON.parse(req.body.developmentProposal),
      image: file,
      isAccepted: false,
      isRejected: false,
      proposalDate: new Date().toLocaleDateString(),
    };
  } else {
    newDevelopmentProposal = {
      ...JSON.parse(req.body.developmentProposal),
      isAccepted: false,
      isRejected: false,
      proposalDate: new Date().toLocaleDateString(),
    };
  }

  try {
    const response = await DevelopmentProposal.create(newDevelopmentProposal);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const updateDevelopmentProposal = async (req, res, next) => {
  const { id } = req.query;
  let updatedDevelopmentProposal = {};
  if (req.file) {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    updateDevelopmentProposal = {
      ...JSON.parse(req.body.developmentProposal),
      image: file,
    };
  } else {
    updateDevelopmentProposal = { ...JSON.parse(req.body.developmentProposal) };
  }

  try {
    const response = await DevelopmentProposal.findOneAndUpdate(
      { _id: id },
      updatedDevelopmentProposal,
      {
        new: true,
      }
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const updateDevelopmentProposalStatus = async (req, res, next) => {
  try {
    const { id } = req.query;
    const { isAccepted, isRejected } = req.body;
    const query = { _id: id };
    const response = await DevelopmentProposal.findOneAndUpdate(
      query,
      { isAccepted, isRejected },
      {
        new: true,
      }
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const removeDevelopmentProposal = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(id);
    const query = { _id: id };
    const response = await DevelopmentProposal.deleteOne(query);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDevelopmentProposal,
  addNewDevelopmentProposal,
  removeDevelopmentProposal,
  updateDevelopmentProposal,
  updateDevelopmentProposalStatus,
};
