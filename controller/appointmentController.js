const { response } = require('express');
const Appointment = require('../schemas/AppointmentSchema');

const handleAppointment = async (req, res, next) => {
  try {
    const newAppointment = req.body;
    const response = await Appointment.insertMany(newAppointment);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleUserAppointment = async (req, res, next) => {
  try {
    const { email } = req.query;
    const date = new Date(req.query.date).toLocaleDateString();
    console.log(date);
    const response = await Appointment.find({ email, date });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAppointment,
  handleUserAppointment,
};
