const Development = require('../../schemas/Development/DevelopmentSchema');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');

const getAllDevelopment = async (req, res, next) => {
  try {
    const response = await Development.find({});
    response.sort((a, b) => a?.upvotes?.length - b?.upvotes?.length);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNewDevelopment = async (req, res, next) => {
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const newDevelopment = {
    ...JSON.parse(req.body.development),
    bannerImg: file,
    isVerified: false,
  };

  try {
    const response = await Development.insertMany(newDevelopment);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleDeleteDevelopment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = { _id: id };
    const response = await Development.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// handle upvote
const handleUpvote = async (req, res, next) => {
  try {
    const { id, email } = req.query;
    const query = { _id: id };
    const proposal = await Development.find(query);
    if (
      !!proposal[0].upvotes?.includes(email) ||
      !!proposal[0].downvotes?.includes(email)
    ) {
      return res.json({ alert: 'Already voted' });
    } else {
      const response = await Development.updateOne(query, {
        upvotes: [...proposal[0].upvotes, email],
      });
      res.json(response);
    }
  } catch (error) {
    next(error);
  }
};

// handle downVote
const handleDownvote = async (req, res, next) => {
  try {
    const { id, email } = req.query;
    const query = { _id: id };
    const proposal = await Development.find(query);
    if (
      !!proposal[0].downvotes?.includes(email) ||
      !!proposal[0].upvotes?.includes(email)
    ) {
      return res.json({ alert: 'Already voted' });
    } else {
      const responce = await Development.updateOne(query, {
        downvotes: [...proposal[0].downvotes, email],
      });
      res.json(responce);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDevelopment,
  handleAddNewDevelopment,
  handleDeleteDevelopment,
  handleUpvote,
  handleDownvote,
};
