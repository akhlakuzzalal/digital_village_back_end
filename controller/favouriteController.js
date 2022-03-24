const favourite = require('../schemas/FavouriteSchema');

const getFavourites = async (req, res, next) => {
  try {
    const { uId } = req.query;

    const response = await favourite.find({ uId }).populate('videoId blogId');
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const addToFavourite = async (req, res, next) => {
  try {
    const { uId, videoId, blogId } = req.body;
    let query = {};
    if (videoId) {
      query = { uId, videoId };
    } else if (blogId) {
      query = { uId, blogId };
    }
    const favouritedVideo = new favourite(query);
    //save the favourite video information data in MongoDB
    const response = await favouritedVideo.save();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const removeFromFavourite = async (req, res, next) => {
  try {
    const { uId, videoId, blogId } = req.body;
    let query = {};
    if (videoId) {
      query = { videoId, uId };
    } else {
      query = { blogId, uId };
    }
    const response = await favourite.findOneAndDelete(query);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFavourites,
  addToFavourite,
  removeFromFavourite,
};
