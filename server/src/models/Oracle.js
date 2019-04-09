const mongoose = require('mongoose');

const { Schema } = mongoose;

const OracleSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pair: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  optionsCount: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviewsCount: {
    type: Number,
    required: true,
  },
  volume: {
    GIC: {
      type: Number,
      required: true,
    },
    BTC: {
      type: Number,
      required: true,
    },
    USD: {
      type: Number,
      required: true,
    },
  },
  reviews: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
  statistics: [
    {
      label: {
        type: String,
      },
      day: {
        type: Number,
      },
      week: {
        type: Number,
      },
      month: {
        type: Number,
      },
    },
  ],
});

const Oracle = mongoose.model('Oracle', OracleSchema);

module.exports = Oracle;
