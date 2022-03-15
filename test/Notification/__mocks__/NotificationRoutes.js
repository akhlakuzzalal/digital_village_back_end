const express = require('express');
const {
  getAllNotification,
  addANotification,
} = require('./NotificationController');
const router = express.Router();

router.get('/all', getAllNotification);
router.post('/add', addANotification);

module.exports = router;
