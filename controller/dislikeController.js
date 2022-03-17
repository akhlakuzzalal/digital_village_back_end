const DisLike = require('../schemas/DislikeSchema');
const Like = require('../schemas/LikeSchema');

const getDisLikes = async (req, res, next) => {
  try {
    const { videoId, commentId, blogId } = req.body;
    let query = {};

    if (videoId) {
      query = { videoId };
    } else if (blogId) {
      query = { blogId };
    } else {
      query = { commentId };
    }

    DisLike.find(query).exec((err, dislikes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, dislikes });
    });
  } catch (error) {
    next(error);
  }
};

const addDisLike = async (req, res, next) => {
  try {
    const { videoId, uId, commentId, blogId } = req.body;
    let data = {};

    if (videoId) {
      data = { videoId, uId };
    } else if (blogId) {
      data = { blogId, uId };
    } else {
      data = { commentId, uId };
    }

    const disLike = new DisLike(data);
    //save the like information data in MongoDB
    disLike.save((err, dislikeResult) => {
      if (err) return res.json({ success: false, err });
      // if like button is allready clicked then decrease it
      Like.findOneAndDelete(data).exec((err, likeResult) => {
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
    const { videoId, uId, commentId, blogId } = req.body;

    if (videoId) {
      query = { videoId, uId };
    } else if (blogId) {
      query = { blogId, uId };
    } else {
      query = { commentId, uId };
    }

    DisLike.findOneAndDelete(query).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDisLikes,
  addDisLike,
  removeDisLike,
};
