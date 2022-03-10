const express = require('express');
const {
  getVideoDisLikes,
} = require('../../../controller/Education/videoController/videoDislikeController');
const router = express.Router();

router.post('/getAll', getVideoDisLikes);

module.exports = router;
