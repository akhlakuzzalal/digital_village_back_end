const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
      enum: ['upcoming', 'archived'],
    },
    participants: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Event', eventSchema);
