const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const {
  handleUploadVideo,
  getallVideo,
  addTeacher,
} = require('../../controller/Education/teacherController');

router.get('/allVideo', getallVideo);
router.post('/uploadVideo', upload.single('file'), handleUploadVideo);
router.post('/addTeacher', addTeacher);

module.exports = router;
