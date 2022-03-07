const Development = require('../schemas/DevelopmentSchema/DevelopmentSchema');

const getAllDevelopment = async (req, res, next) => {
  try {
    const response = await Development.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNewDevelopment = async (req, res, next) => {
  try {
    const news = req.body;
    const response = await Development.insertMany(news);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleDeleteDevelopment = async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = { _id: id };
    const response = await Development.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDevelopment,
  handleAddNewDevelopment,
  handleDeleteDevelopment,
};
