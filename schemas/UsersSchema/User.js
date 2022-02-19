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
    yearlyIncome: String,
    employmentStatus: String,
    meritialStatus: {
      type: String,
      enum: ['married', 'unmarried'],
    },
    religion: String,
    photo: String,
    refreshToken: String,
  },
  { versionKey: false }
);

userSchema.methods = {
  findMarriedUser: function () {
    mongoose.model('User').find({ meritialStatus: 'unmarried' });
  },
};

module.exports = mongoose.model('User', userSchema);
