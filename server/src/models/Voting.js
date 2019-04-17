const mongoose = require('mongoose');

const { Schema } = mongoose;

const VotingSchema = new Schema({
  id: {
    type: String,
  },
  votingTypeId: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
  info: {
    id: {
      type: String,
    },
    rationale: {
      type: String,
    },
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    json: {
      type: String,
    },
    optionType: {
      type: String,
    },
    brokerScheme: {
      type: String,
    },
    justification: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    amount: {
      type: Number,
    },
    newValue: {
      type: String,
    },
    commission: {
      type: Number,
    },
    sourceCode: {
      type: String,
    },
  },
});

const Voting = mongoose.model('Voting', VotingSchema);

module.exports = Voting;
