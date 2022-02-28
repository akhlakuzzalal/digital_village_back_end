const Video = require('../schemas/VideosSchema/Video');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');

const handleUploadVideo = async (req, res, next) => {
  console.log(req.file);
  try {
    const file = {
      videoName: req.file.originalname,
      videoPath: req.file.path,
      videoType: req.file.mimetype,
      videoSize: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    await Video.insertMany(file);
    res.json({
      message: 'file uploaded successfully',
    });
  } catch (error) {
    next(error);
  }
};

const getallVideo = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleUploadVideo,
  getallVideo,
};
