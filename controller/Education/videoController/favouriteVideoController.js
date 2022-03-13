const favourite = require('../../../schemas/FavouriteSchema/FavouriteSchema');

const getFavouriteVideos = async (req, res, next) => {
  try {
    const { uId } = req.query;

    const response = await favourite.find({ uId }).populate('videoId');
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const addToFavourite = async (req, res, next) => {
  try {
    const { uId, videoId } = req.body;
    const favouritedVideo = new favourite({ uId, videoId });
    //save the favourite video information data in MongoDB
    const response = await favouritedVideo.save();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const removeFromFavourite = async (req, res, next) => {
  try {
    const { uId, videoId } = req.body;
    const response = await favourite.findOneAndDelete({ uId, videoId });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFavouriteVideos,
  addToFavourite,
  removeFromFavourite,
};
