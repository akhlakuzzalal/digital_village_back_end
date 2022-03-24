const express = require('express');
const {
  makeBlogFavourite,
  getallBlogs,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
  getallVideos,
} = require('./studentController');
const router = express.Router();

router.get('/allVideos', getallVideos);
router.get('/allBlogs', getallBlogs);
router.get('/favouriteVideos', getAllFavouriteVideos);
router.get('/favouriteBlogs', getAllFavouriteBlogs);
router.post('/makeBlogFavourite', makeBlogFavourite);
router.post('/makeVideoFavourite', makeVideoFavourite);

module.exports = router;
