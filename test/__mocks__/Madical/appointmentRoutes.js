const express = require('express');

const router = express.Router();

const {
  handleAppointment,
  handleUserAppointment,
} = require('./appointmentController.js');

router.post('/addAppointment', handleAppointment);
router.get('/findUserAppointment', handleUserAppointment);

module.exports = router;
