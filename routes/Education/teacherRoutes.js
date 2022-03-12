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
  deleteABlog,
  deleteAVideo,
  getSingleVideo,
  editAVideo,
} = require('../../controller/Education/teacherController');

router.get('/video/all', getallVideo);
router.get('/myVideos', getMyVideos);
router.get('/getSingleVideo', getSingleVideo);
router.post('/publishVideo', upload.single('file'), publishVideo);
router.put('/editAVideo', editAVideo);
router.delete('/deleteAVideo', deleteAVideo);
router.get('/myBlogs', getMyBlogs);
router.post('/publishBlog', upload.single('file'), publishBlog);
router.delete('/deleteABlog', deleteABlog);
router.post('/addTeacher', addTeacher);

module.exports = router;
