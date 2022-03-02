const express = require('express');
const {
  makeBlogFavourite,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
} = require('../../controller/Education/studentController');
const router = express.Router();

router.post('/favouriteBlogs', getAllFavouriteBlogs);
router.post('/favouriteVideos', getAllFavouriteVideos);
router.post('/makeBlogFavourite', makeBlogFavourite);
router.post('/makeVideoFavourite', makeVideoFavourite);

module.exports = router;
