const Review = require('../schemas/Review');

const handleAddReview = async (req, res, next) => {
  try {
    const newReview = req.body;
    const result = await Review.insertMany(newReview);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllReview = async (req, res, next) => {
  try {
    const allReview = await Review.find({});
    res.json(allReview);
  } catch (error) {
    next(error);
  }
};

const handleDeleteReview = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await Review.deleteOne({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAddReview,
  getAllReview,
  handleDeleteReview,
};
