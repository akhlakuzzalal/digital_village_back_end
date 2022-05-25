const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    productID: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Order', orderSchema);
