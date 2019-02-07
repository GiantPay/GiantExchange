const Broker = require('../../../models/Broker');

module.exports = {
  Query: {
    broker: (root, args) => new Promise((resolve, reject) => {
      Broker.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    brokerList: () => new Promise((resolve, reject) => {
      Broker.find({})
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addBroker: (root, {
      id, dealScheme, caption, volume, info,
    }) => {
      const newBroker = new Broker({
        id, dealScheme, caption, volume, info,
      });

      return new Promise((resolve, reject) => {
        newBroker.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editBroker: (root, {
      id, dealScheme, caption, volume, info,
    }) => new Promise((resolve, reject) => {
      Broker.findOneAndUpdate({ id }, {
        $set: {
          dealScheme,
          caption,
          volume,
          info,
        },
      }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    deleteBroker: (root, args) => new Promise((resolve, reject) => {
      Broker.findOneAndRemove(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
