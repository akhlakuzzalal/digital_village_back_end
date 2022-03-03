const express = require('express');
const {
  makeBlogFavourite,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
} = require('../../controller/Education/studentController');
const router = express.Router();

router.get('/favouriteVideos', getAllFavouriteVideos);
router.get('/favouriteBlogs', getAllFavouriteBlogs);
router.post('/makeBlogFavourite', makeBlogFavourite);
router.post('/makeVideoFavourite', makeVideoFavourite);

module.exports = router;
