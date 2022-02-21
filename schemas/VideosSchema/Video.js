const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    videoName: {
      type: String,
      required: true,
    },
    videoPath: {
      type: String,
      required: true,
    },
    videoType: {
      type: String,
      required: true,
    },
    videoSize: {
      type: String,
      required: true,
    },
    rating: String,
    date: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model('Video', videoSchema);
