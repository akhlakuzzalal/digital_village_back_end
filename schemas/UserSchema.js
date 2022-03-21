const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: ['married', 'unmarried'],
    },
    employmentStatus: {
      type: String,
      enum: ['employed', 'unemployed'],
    },
    phone: String,
    yearlyIncome: Number,
    religion: {
      type: String,
      enum: ['Islam', 'Christianity', 'Hinduism', 'Buddhism', 'others'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
    },
    about: String,
    occupation: String,
    roles: Object,
    photo: Object,
    refreshToken: String,
    requested: Array,
    requesting: Array,
    connection: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', userSchema);
