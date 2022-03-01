const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  handleUploadVideo,
  getallVideo,
} = require('../controller/teacherController');

router.post('/uploadVideo', upload.single('file'), handleUploadVideo);
router.get('/allVideo', getallVideo);

module.exports = router;
