const News = require('../schemas/NewsSchema');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');

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
  console.log(newNews);

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
    const id = req.params.id;
    const data = { _id: id };
    const response = await News.deleteOne(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleEditNews = async (req, res, next) => {
  const { id } = req.query;
  let editNews = {};
  if (req.file) {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    editNews = { ...JSON.parse(req.body.news), bannerImg: file };
  } else {
    editNews = { ...JSON.parse(req.body.news) };
  }

  try {
    const response = await News.findOneAndUpdate({ _id: id }, editNews);
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
