const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    title: String,
    email: String,
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
