const VideoLike = require('../../../schemas/VideoLikeSchema/VideoLikeSchema');
const videoDisLike = require('../../../schemas/videoDislikeSchema/videoDislikeSchema');

const getVideoLikes = async (req, res, next) => {
  try {
    const { videoId, commentId } = req.body;
    let query;

    if (videoId) {
      query = { videoId };
    } else {
      query = { commentId };
    }

    VideoLike.find(query).exec((err, videoLikes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videoLikes });
    });
  } catch (error) {
    next(error);
  }
};

const addLike = async (req, res, next) => {
  try {
    const { uId, videoId, commentId } = req.body;
    let data = {};
    if (videoId) {
      data = { videoId, userId };
    } else {
      data = { commentId, uId };
    }

    const like = new VideoLike(data);
    //save the like information data in MongoDB
    like.save((err, likeResutl) => {
      if (err) return res.json({ success: false, err });

      //decrease the dislike by 1 if it previously clicked

      videoDisLike.findOneAndDelete(variable).exec((err, disLikeResutl) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
      });
    });
  } catch (error) {
    next(error);
  }
};

const removeLike = async (req, res, next) => {
  try {
    let data = {};
    const { uId, videoId, commentId } = req.body;
    if (videoId) {
      data = { videoId, uId };
    } else {
      data = { commentId, uId };
    }

    VideoLike.findOneAndDelete(variable).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVideoLikes,
  addLike,
  removeLike,
};
