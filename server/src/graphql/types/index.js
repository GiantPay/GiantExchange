const { mergeTypes } = require('merge-graphql-schemas');

const User = require('./User/');
const Broker = require('./Broker/');
const Oracle = require('./Oracle/');
const Asset = require('./Asset/');
const ChartData = require('./ChartData/');
const Deal = require('./Deal/');
const Voting = require('./Voting/');
const ChartDatav2 = require('./ChartDatav2/');

const typeDefs = [
  User,
  Broker,
  Oracle,
  Asset,
  ChartData,
  Deal,
  Voting,
  ChartDatav2
];

module.exports = mergeTypes(typeDefs, { all: true });
