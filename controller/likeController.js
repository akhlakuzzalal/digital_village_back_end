const Like = require('../schemas/LikeSchema/LikeSchema');
const DisLike = require('../schemas/DislikeSchema/DislikeSchema');

const getLikes = async (req, res, next) => {
  try {
    const { videoId, commentId, blogId } = req.body;
    let query = {};

    if (videoId) {
      query = { videoId };
    } else if (blogId) {
      query = { blogId };
    } else {
      console.log(commentId);
      query = { commentId };
    }

    Like.find(query).exec((err, likes) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, likes });
    });
  } catch (error) {
    next(error);
  }
};

const addLike = async (req, res, next) => {
  try {
    const { uId, videoId, commentId, blogId } = req.body;

    let data = {};

    if (videoId) {
      data = { videoId, uId };
    } else if (blogId) {
      data = { blogId, uId };
    } else {
      data = { commentId, uId };
    }

    const like = new Like(data);
    //save the like information data in MongoDB
    like.save((err, likeResutl) => {
      if (err) return res.json({ success: false, err });

      //decrease the dislike by 1 if it previously clicked

      DisLike.findOneAndDelete(data).exec((err, disLikeResutl) => {
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
    const { uId, videoId, commentId, blogId } = req.body;

    if (videoId) {
      query = { videoId, uId };
    } else if (blogId) {
      query = { blogId, uId };
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
  getLikes,
  addLike,
  removeLike,
};
