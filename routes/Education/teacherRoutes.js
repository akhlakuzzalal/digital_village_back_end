const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const {
  publishVideo,
  getallVideo,
  addTeacher,
  publishBlog,
} = require('../../controller/Education/teacherController');

router.get('/allVideo', getallVideo);
router.post('/publishVideo', upload.single('file'), publishVideo);
router.post('/addTeacher', addTeacher);
router.post('/publishBlog', upload.single('file'), publishBlog);

module.exports = router;
