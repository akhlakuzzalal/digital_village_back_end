const express = require('express');

const router = express.Router();

const {
  handleSaveAppointment,
} = require('../controller/availableAppointmentController');

router.post('/saveAppointment', handleSaveAppointment);

module.exports = router;
