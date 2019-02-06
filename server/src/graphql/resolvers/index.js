import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/';
import Broker from './Broker/';
import Oracle from './Oracle/';
import Asset from './Asset/';

const resolvers = [
  User,
  Broker,
  Oracle,
  Asset,
];

export default mergeResolvers(resolvers);
