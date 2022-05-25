const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    brand: String,
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    isMedicine: Boolean,
    isVerfied: Boolean,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Product', ProductsSchema);
