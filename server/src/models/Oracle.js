import mongoose from 'mongoose';

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
});

const Oracle = mongoose.model('Oracle', OracleSchema);

export default Oracle;
