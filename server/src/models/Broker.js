const mongoose = require('mongoose');

const { Schema } = mongoose;

const BrokerSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  dealScheme: {
    type: Number,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  openedOptions: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviews: {
    type: Array,
  },
  reviewsCount: {
    type: Number,
    required: true,
  },
  statistics: {
    type: Array,
  },
});

const Broker = mongoose.model('Broker', BrokerSchema);

module.exports = Broker;
