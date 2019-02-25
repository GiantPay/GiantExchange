const Deal = require('../../../models/Deal');

module.exports = {
  Query: {
    deal: (root, args) => new Promise((resolve, reject) => {
      Deal.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    dealList: (root, args = {}) => new Promise((resolve, reject) => {
      Deal.find(args)
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addDeal: (root, {
      id, asset, volume, members, minTraderProfit, maxTraderProfit,
    }) => {
      const newDeal = new Deal({
        id, asset, volume, members, minTraderProfit, maxTraderProfit,
      });

      return new Promise((resolve, reject) => {
        newDeal.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editDeal: (root, {
      id, asset, volume, members, minTraderProfit, maxTraderProfit,
    }) => new Promise((resolve, reject) => {
      Deal.findOneAndUpdate({ id }, {
        $set: {
          id, asset, volume, members, minTraderProfit, maxTraderProfit,
        },
      }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
