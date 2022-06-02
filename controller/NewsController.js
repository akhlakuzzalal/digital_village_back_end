const News = require('../schemas/NewsSchema');
const deleteFile = require('../utilities/deleteFile');

const getAllNews = async (req, res, next) => {
  try {
    const response = await News.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNews = async (req, res, next) => {
  const newNews = { ...req.body, isVerified: false };
  try {
    const response = await News.insertMany(newNews);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getSingleNews = async (req, res, next) => {
  try {
    const { id } = req.query;
    const news = await News.findOne({ _id: id });
    res.json(news);
  } catch (error) {
    next(error);
  }
};

const handleDeleteNews = async (req, res, next) => {
  try {
    const { id, public_id } = req.query;

    deleteFile(public_id);

    const response = await News.deleteOne({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleEditNews = async (req, res, next) => {
  const { id, public_id } = req.query;

  const updatedNews = req.body;

  deleteFile(public_id);

  try {
    const response = await News.findOneAndUpdate({ _id: id }, updatedNews);
    res.json({
      success: true,
      response,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllNews,
  handleAddNews,
  handleDeleteNews,
  handleEditNews,
  getSingleNews,
};
