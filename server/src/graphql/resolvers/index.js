const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./User/');
const Broker = require('./Broker/');
const Oracle = require('./Oracle/');
const Asset = require('./Asset/');
const ChartData = require('./ChartData/');
const Deal = require('./Deal/');
const Voting = require('./Voting/');

const resolvers = [
  User,
  Broker,
  Oracle,
  Asset,
  ChartData,
  Deal,
  Voting,
];

module.exports = mergeResolvers(resolvers);
