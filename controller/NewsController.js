const News = require('../schemas/NewsSchema/NewsSchema');

const getAllNews = async (req, res, next) => {
  try {
    const response = await News.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNews = async (req, res, next) => {
  try {
    const news = req.body;
    const response = await News.insertMany(news);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleDeleteNews = async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = { _id: id };
    const response = await News.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNews,
  handleAddNews,
  handleDeleteNews,
};
