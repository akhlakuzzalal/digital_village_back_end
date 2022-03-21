const UserReview = require('../schemas/UserReviewSchema');

const getAllUserReview = async (req, res, next) => {
  try {
    const response = await UserReview.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const getSpecificUserReview = async (req, res, next) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const response = await UserReview.find(filter);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddUserReview = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await UserReview.insertMany(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleDeleteUserReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = { _id: id };
    const response = await UserReview.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};


const handleReviewUpdate = async (req, res, next) => {
  // console.log('check this data hit', req.body);

  try {
    const id = req.query.id;
    const updateReview = req.body;
    const filter = { _id: id };
    const response = await UserReview.findOneAndReplace(filter, updateReview);
    res.json(response);
    console.log(response)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUserReview,
  getSpecificUserReview,
  handleAddUserReview,
  handleReviewUpdate,
  handleDeleteUserReview,
};
