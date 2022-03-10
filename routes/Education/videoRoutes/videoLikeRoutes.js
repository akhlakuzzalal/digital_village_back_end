const express = require('express');
const {
  getVideoLikes,
} = require('../../../controller/Education/videoController/videoLikeController');
const router = express.Router();

router.post('/getAll', getVideoLikes);

module.exports = router;
