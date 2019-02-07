const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./User/');
const Broker = require('./Broker/');
const Oracle = require('./Oracle/');
const Asset = require('./Asset/');

const resolvers = [
  User,
  Broker,
  Oracle,
  Asset,
];

module.exports = mergeResolvers(resolvers);
