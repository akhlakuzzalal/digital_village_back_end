const express = require('express');
const router = express.Router();
const {
  addToFavourite,
  removeFromFavourite,
  getFavouriteVideos,
} = require('../../../controller/Education/videoController/favouriteVideoController');

router.get('/all', getFavouriteVideos);
router.post('/add', addToFavourite);
router.post('/remove', removeFromFavourite);

module.exports = router;
