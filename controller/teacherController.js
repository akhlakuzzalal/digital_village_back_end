const Video = require('../schemas/VideosSchema/Video');

const handleUploadVideo = async (req, res, next) => {
  try {
    await console.log(req.file);
  } catch (error) {
    res.status(400).send(error.message);
    next(error);
  }
};

module.exports = {
  handleUploadVideo,
  handleGetFile,
};
