const mongoose = require('mongoose');

const { Schema } = mongoose;

const DealSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  openValue: {
    type: Number,
    required: true,
  },
  closeValue: {
    type: Number,
  },
  amount: {
    type: Number,
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  time: {
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
    },
  },
});

const Deal = mongoose.model('Deal', DealSchema);

module.exports = Deal;
