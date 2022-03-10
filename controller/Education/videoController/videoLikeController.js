const VideoLike = require('../../../schemas/VideoLikeSchema/VideoLikeSchema');

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

module.exports = {
  getVideoLikes,
};
