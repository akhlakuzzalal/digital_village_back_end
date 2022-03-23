const { response } = require('express');
const { ObjectId } = require('mongodb');
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

const handleUpdatepayment = async (req, res, next) => {
  console.log('hitted', req.body);

  try {
    const id = req.query.id;
    const payment = req.body;
    console.log(info);
    const filter = { _id: ObjectId(id) };

    const updateDoc = {
      $set: { payment: payment },
    };
    const response = await Appointment.updateOne(filter, updateDoc);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAppointment,
  handleUserAppointment,
  handleUpdatepayment,
};
