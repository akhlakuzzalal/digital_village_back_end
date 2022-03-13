const Like = require('../../../schemas/LikeSchema/LikeSchema');
const DisLike = require('../../../schemas/DislikeSchema/DislikeSchema');

const getVideoLikes = async (req, res, next) => {
  try {
    const { videoId, commentId } = req.body;
    let query;

    if (videoId) {
      query = { videoId };
    } else {
      query = { commentId };
    }

    Like.find(query).exec((err, videoLikes) => {
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
    let query = {};
    if (videoId) {
      query = { videoId, uId };
    } else {
      query = { commentId, uId };
    }

    const like = new Like(query);
    //save the like information data in MongoDB
    like.save((err, likeResutl) => {
      if (err) return res.json({ success: false, err });

      //decrease the dislike by 1 if it previously clicked

      DisLike.findOneAndDelete(query).exec((err, disLikeResutl) => {
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
    let query = {};
    const { uId, videoId, commentId } = req.body;
    if (videoId) {
      query = { videoId, uId };
    } else {
      query = { commentId, uId };
    }

    Like.findOneAndDelete(query).exec((err, result) => {
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
