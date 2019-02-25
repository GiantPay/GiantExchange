const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChartDataSchema = new Schema({
  rate: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const ChartData = mongoose.model('ChartData', ChartDataSchema);

module.exports = ChartData;
