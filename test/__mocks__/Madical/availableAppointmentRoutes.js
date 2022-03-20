const express = require('express');
const router = express.Router();

const {
  handleSaveAppointment,
  handleGetAppointment,
} = require('./availableAppointmentController');

router.post('/saveAppointment', handleSaveAppointment);
router.get('/getAppointment', handleGetAppointment);

module.exports = router;
