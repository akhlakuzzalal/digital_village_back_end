const express = require('express');
const {
  getVideoDisLikes,
  addDisLike,
  removeDisLike,
} = require('../../../controller/Education/videoController/videoDislikeController');
const router = express.Router();

router.post('/getAll', getVideoDisLikes);
router.post('/add', addDisLike);
router.post('/remove', removeDisLike);

module.exports = router;
