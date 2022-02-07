const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    yearlyIncome: {
      type: String,
      required: true,
    },
    employmentStatus: {
      type: String,
      required: true,
    },
    meritialStatus: {
      type: String,
      required: true,
      enum: ['married','unmarried'],
    },

    religion: String,

    photo: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("User",userSchema);