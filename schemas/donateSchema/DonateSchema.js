const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema(

  {
    title: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
    },
    goal: {
        type: Number,
        required: true,
    },
    raised: {
        type: Number,
    },
    donars: {
        type: Array,
    },
    author: {
        type: Array,
    },
    date: {
      type: String,
      required: true,
    },   
  },
  
);



module.exports = mongoose.model('Donate', donateSchema);