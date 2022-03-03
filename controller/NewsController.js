const News = require("../schemas/NewsSchema/NewsSchema");


const getAllNews = async (req, res, next) => {
    console.log("get request check")
  try {
    const response = await News.find({});
    res.json(response);
    console.log(response)
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


module.exports = {
  getAllNews,
  handleAddNews,
};
