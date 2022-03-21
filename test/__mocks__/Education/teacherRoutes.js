const express = require('express');
const router = express.Router();
const {
  publishVideo,
  publishBlog,
  getallVideo,
  getMyBlogs,
  getMyVideos,
  deleteAVideo,
  getSingleVideo,
  editAVideo,
  getSingleBlog,
  editABlog,
} = require('./teacherController');

router.get('/video/all', getallVideo);
router.get('/myVideos', getMyVideos);
router.get('/getSingleVideo', getSingleVideo);
router.post('/publishVideo',  publishVideo);
router.put('/editAVideo', editAVideo);
router.delete('/deleteAVideo', deleteAVideo);
router.get('/myBlogs', getMyBlogs);
router.get('/getSingleBlog', getSingleBlog);
router.post('/publishBlog',  publishBlog);
router.put('/editABlog', editABlog);

module.exports = router;
