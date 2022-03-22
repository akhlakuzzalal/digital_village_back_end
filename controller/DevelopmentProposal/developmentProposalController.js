const DevelopmentProposal = require('../../schemas/DevelopmentProposal/DevelopmentProposalSchema');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');

const getAllDevelopmentProposal = async (req, res, next) => {
  try {
    const response = await DevelopmentProposal.find({});
    response.sort((a, b) => a?.upvotes?.length - b?.upvotes?.length);
    res.json(response);
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
      isVerified: false,
    };
  }

  try {
    const response = await DevelopmentProposal.create(newDevelopmentProposal);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const removeDevelopmentProposal = async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = { _id: id };
    const response = await DevelopmentProposal.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDevelopmentProposal,
  addNewDevelopmentProposal,
  removeDevelopmentProposal,
};
