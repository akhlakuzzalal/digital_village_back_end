const express = require('express');
const {
  getVideoLikes,
  addLike,
  removeLike,
} = require('../../../controller/Education/videoController/videoLikeController');
const router = express.Router();

router.post('/getAll', getVideoLikes);
router.post('/add', addLike);
router.post('/remove', removeLike);

module.exports = router;
