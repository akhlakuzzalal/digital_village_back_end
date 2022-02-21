const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { handleUploadVideo } = require('../controller/teacherController');

router.post('/uploadVideo', upload.single('file'), handleUploadVideo);

module.exports = router;
