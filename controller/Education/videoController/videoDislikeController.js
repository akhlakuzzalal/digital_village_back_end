const VideoDisLike = require('../../../schemas/videoDislikeSchema/videoDislikeSchema');
const videoLike = require('../../../schemas/VideoLikeSchema/VideoLikeSchema');

const getVideoDisLikes = async (req, res, next) => {
  try {
    const { videoId, commentId } = req.body;
    let query;
    if (videoId) {
      query = { videoId };
    } else {
      query = { commentId };
    }

    VideoDisLike.find(query).exec((err, videoDisLikes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videoDisLikes });
    });
  } catch (error) {
    next(error);
  }
};

const addDisLike = async (req, res, next) => {
  try {
    const { videoId, uId, commentId } = req.body;
    let query = {};
    console.log('adding dislike');
    if (videoId) {
      query = { videoId, uId };
    } else {
      query = { commentId, uId };
    }

    const disLike = new VideoDisLike(query);
    //save the like information data in MongoDB
    disLike.save((err, dislikeResult) => {
      if (err) return res.json({ success: false, err });
      // if like button is allready clicked then decrease it
      videoLike.findOneAndDelete(query).exec((err, likeResult) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
      });
    });
  } catch (error) {
    next(error);
  }
};

const removeDisLike = async (req, res, next) => {
  try {
    let query = {};
    const { videoId, uId, commentId } = req.body;
    if (videoId) {
      query = { videoId, uId };
    } else {
      query = { commentId, uId };
    }

    VideoDisLike.findOneAndDelete(query).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVideoDisLikes,
  addDisLike,
  removeDisLike,
};
