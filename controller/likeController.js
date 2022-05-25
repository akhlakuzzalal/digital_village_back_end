const Like = require('../schemas/LikeSchema');
const DisLike = require('../schemas/DislikeSchema');

const getLikes = async (req, res, next) => {
  try {
    const { videoId, commentId, blogId, socialPostId } = req.body;
    let query = {};

    if (videoId) {
      query = { videoId };
    } else if (blogId) {
      query = { blogId };
    } else if (commentId) {
      query = { commentId };
    } else {
      query = { socialPostId };
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
    const { uId, videoId, commentId, blogId, socialPostId } = req.body;

    let data = {};

    if (videoId) {
      data = { videoId, uId };
    } else if (blogId) {
      data = { blogId, uId };
    } else if (commentId) {
      data = { commentId, uId };
    } else {
      data = { socialPostId, uId };
    }

    const like = new Like(data);
    //save the like information data in MongoDB
    like.save((err, likeResutl) => {
      if (err) return res.json({ success: false, err });

      //decrease the dislike by 1 if it previously clicked

      DisLike.deleteMany(data).exec((err, disLikeResutl) => {
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
    const { uId, videoId, commentId, blogId, socialPostId } = req.body;

    if (videoId) {
      query = { videoId, uId };
    } else if (blogId) {
      query = { blogId, uId };
    } else if (commentId) {
      query = { commentId, uId };
    } else {
      query = { socialPostId, uId };
    }

    Like.deleteMany(query).exec((err, result) => {
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
