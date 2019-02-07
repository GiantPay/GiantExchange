const mongoose = require('mongoose');

const { Schema } = mongoose;

const AssetSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  asset: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  members: {
    oraclesCount: {
      type: Number,
      required: true,
    },
    openedOptions: {
      type: Number,
      required: true,
    },
    openedOptionsPurchases: {
      type: Number,
      required: true,
    },
  },
  minTraderProfit: {
    type: Number,
    required: true,
  },
  maxTraderProfit: {
    type: Number,
    required: true,
  },
});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
