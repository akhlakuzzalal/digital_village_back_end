const VideoDisLike = require('../../../schemas/videoDislikeSchema/videoDislikeSchema');

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

module.exports = {
  getVideoDisLikes,
};
