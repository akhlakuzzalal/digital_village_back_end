const express = require('express');
const {
  getAllNotification,
  handleAddNotification,
  getSpecificUserNotification,
  handleDeleteNotification,
} = require('../controller/NotificaionController');
const validateUser = require('../middlewares/validateUser');
const router = express.Router();

router.get('/all', getAllNotification);
router.get('/userSpecificNotifciations', getSpecificUserNotification);
router.post('/add', handleAddNotification);
router.delete('/deleteNotification', handleDeleteNotification);

module.exports = router;
