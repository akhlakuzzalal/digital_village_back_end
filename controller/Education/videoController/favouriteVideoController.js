const favouriteVideo = require('../../../schemas/FavouriteVideoSchema/FavouriteVideoSchema');

const getFavouriteVideos = async (req, res, next) => {
  try {
    const { uId } = req.query;

    favouriteVideo.find({ uId }).exec((err, favouriteVideos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, favouriteVideos });
    });
  } catch (error) {
    next(error);
  }
};

const addToFavourite = async (req, res, next) => {
  try {
    const { uId, videoId } = req.body;
    const favouritedVideo = new favouriteVideo({ uId, videoId });
    //save the favourite video information data in MongoDB
    const response = await favouritedVideo.save();
    res.json({
      success: true,
      response,
    });
  } catch (error) {
    next(error);
  }
};

const removeFromFavourite = async (req, res, next) => {
  try {
    const { uId, videoId } = req.body;
    favouriteVideo.findOneAndDelete({ uId, videoId }).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFavouriteVideos,
  addToFavourite,
  removeFromFavourite,
};
