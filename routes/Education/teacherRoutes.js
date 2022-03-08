const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const {
  publishVideo,
  addTeacher,
  publishBlog,
} = require('../../controller/Education/teacherController');

router.post('/publishVideo', upload.single('file'), publishVideo);
router.post('/publishBlog', upload.single('file'), publishBlog);
router.post('/addTeacher', addTeacher);

module.exports = router;
