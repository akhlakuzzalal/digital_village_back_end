const mongoose = require('mongoose');

const vaccineRegistrationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    nid: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    center: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Panding',
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model(
  'VaccineRegistration',
  vaccineRegistrationSchema
);
