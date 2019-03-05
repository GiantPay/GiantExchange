const Asset = require('../../../models/Asset');

module.exports = {
  Query: {
    asset: (root, args) => new Promise((resolve, reject) => {
      Asset.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    assetList: () => new Promise((resolve, reject) => {
      Asset.find({})
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addAsset: (root, {
      id, asset, volume, members, minTraderProfit, maxTraderProfit,
    }) => {
      const newAsset = new Asset({
        id, asset, volume, members, minTraderProfit, maxTraderProfit,
      });

      return new Promise((resolve, reject) => {
        newAsset.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editAsset: (root, {
      id, asset, volume, members, minTraderProfit, maxTraderProfit,
    }) => new Promise((resolve, reject) => {
      Asset.findOneAndUpdate({ id }, {
        $set: {
          id, asset, volume, members, minTraderProfit, maxTraderProfit,
        },
      }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    deleteAsset: (root, args) => new Promise((resolve, reject) => {
      Asset.findOneAndRemove(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
