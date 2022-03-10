const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const {
  publishVideo,
  addTeacher,
  publishBlog,
  getallVideo,
  getMyBlogs,
  getMyVideos,
} = require('../../controller/Education/teacherController');

router.get('/video/all', getallVideo);
router.get('/myVideos', getMyVideos);
router.get('/myBlogs', getMyBlogs);
router.post('/publishVideo', upload.single('file'), publishVideo);
router.post('/publishBlog', upload.single('file'), publishBlog);
router.post('/addTeacher', addTeacher);

module.exports = router;
