import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Broker from './Broker/';
import Oracle from './Oracle/';
import Asset from './Asset/';

const typeDefs = [
  User,
  Broker,
  Oracle,
  Asset,
];

export default mergeTypes(typeDefs, { all: true });
