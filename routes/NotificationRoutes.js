const express = require('express');
const {
  getAllNotification,
  handleAddNotification,
  getSpecificUserNotification,
  handleDeleteNotification,
  testNotification,
} = require('../controller/NotificationController/NotificaionController');
const validateUser = require('../middlewares/validateUser');
const router = express.Router();

router.get('/all', getAllNotification);
router.get('/test', testNotification);
router.get('/userSpecificNotifciations', getSpecificUserNotification);
router.post('/add', handleAddNotification);
router.delete('/deleteNotification', handleDeleteNotification);

module.exports = router;
