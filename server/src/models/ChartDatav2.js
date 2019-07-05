const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChartDatav2Schema = new Schema({
  id: {
    type: String
  },
  rate: {
    type: Number,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const ChartDatav2 = mongoose.model('ChartDatav2', ChartDatav2Schema);

module.exports = ChartDatav2;
