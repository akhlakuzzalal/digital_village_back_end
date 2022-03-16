const express = require('express');
const {
  getAllNotification,
  addANotification,
  deleteANotification,
  addOneNotification,
} = require('./NotificationController');
const router = express.Router();

router.get('/all', getAllNotification);
router.post('/add', addANotification);
router.post('/addOne', addOneNotification);
router.post('/delete', deleteANotification);

module.exports = router;
