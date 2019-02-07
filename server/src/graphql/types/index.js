const { mergeTypes } = require('merge-graphql-schemas');

const User = require('./User/');
const Broker = require('./Broker/');
const Oracle = require('./Oracle/');
const Asset = require('./Asset/');

const typeDefs = [
  User,
  Broker,
  Oracle,
  Asset,
];

module.exports = mergeTypes(typeDefs, { all: true });
