const mongoose = require('mongoose');

const availableAppointmentSchema = new mongoose.Schema(
  {
    appointment: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model(
  'AvailableAppointment',
  availableAppointmentSchema
);
