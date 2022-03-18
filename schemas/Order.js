const mongoose = require("mongoose");
// const shortid = require("shortid");

const orderSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      // default: shortid.generate,
    },
    cartItems: {
      type: Array,
      default: [],
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    deliveryMethod: {
      type: String,
      default: "",
    },
    numItem: {
      type: Number,
      default: 0,
    },
    transactionId: {
      type: String,
      required: true,
    },
    paymentDone: {
      type: Boolean,
      default: false,
    },
    customerInfo: {
      type: Object,
      default: {
        cusName: "",
        cusEmail: "",
        cusAdd1: "",
        cusAdd2: "",
        cusCity: "",
        cusState: "",
        cusPostcode: "",
        cusCountry: "Bangladesh",
        cusPhone: "",
        cusFax: "",
      },
    },
    shippingInfo: {
      type: Object,
      default: {
        name: "",
        shippingAdd1: "",
        shippingAdd2: "",
        shippingCity: "",
        shippingState: "",
        shippingPostcode: "",
        shippingCountry: "Bangladesh",
        cusPhone: "",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);