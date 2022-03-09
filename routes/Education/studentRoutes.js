const express = require('express');
const {
  makeBlogFavourite,
  getallVideo,
  getallBlogs,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
} = require('../../controller/Education/studentController');
const router = express.Router();

router.get('/allVideo', getallVideo);
router.get('/allBlogs', getallBlogs);
router.get('/favouriteVideos', getAllFavouriteVideos);
router.get('/favouriteBlogs', getAllFavouriteBlogs);
router.post('/makeBlogFavourite', makeBlogFavourite);
router.post('/makeVideoFavourite', makeVideoFavourite);

module.exports = router;
