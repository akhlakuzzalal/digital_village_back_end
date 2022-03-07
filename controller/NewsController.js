const News = require("../schemas/NewsSchema/NewsSchema");
const fileSizeFormatter = require("../utilities/fileSizeFormatter");


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
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const newNews = {
    ...JSON.parse(req.body.news),
    bannerImg: file,
    isVerified: false,
  };
  try {

    const response = await News.insertMany(newNews);

    console.log(newNews)
   
  } catch (error) {
    next(error);
  }
};

const handleDeleteNews = async (req, res, next) => {
  try {
    console.log("hitt this id")
    const id  = req.params.id;
    const data={_id: id}
    const response = await News.deleteOne(data);
    res.json(response);
    
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllNews,
  handleAddNews,
  handleDeleteNews
};
