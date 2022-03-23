const express = require('express');

const router = express.Router();

const {
  handleAppointment,
  handleUserAppointment,
  handleUpdatepayment,
} = require('../controller/appointmentController.js');

router.post('/addAppointment', handleAppointment);
router.get('/findUserAppointment', handleUserAppointment);
router.put('/findUserAppointment', handleUpdatepayment);
module.exports = router;
