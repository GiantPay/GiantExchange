const Deal = require('../../../models/Deal');
const { PubSub } = require('apollo-server-express');
const moment = require('moment');

const pubsub = new PubSub();

const DEAL_ENDED = 'DEAL_ENDED';
const DEAL_TYPE = {
  CALL: 0,
  PUT: 1,
};
const DEAL_STATUS = {
  WAITING: 'Waiting',
  SUCCESS: 'Success',
  FAIL: 'Fail',
};
const DEAL_SCHEME = {
  BROKER_TRADER: 0,
  TRADER_TRADER: 1,
};

module.exports = {
  Subscription: {
    dealEnded: {
      subscribe: () => pubsub.asyncIterator([DEAL_ENDED]),
    },
  },
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
    addDeal: (root, data) => {
      const newDeal = new Deal({
        ...data,
        status: DEAL_STATUS.WAITING,
        active: true
      });

      return new Promise((resolve, reject) => {
        newDeal.save((err, res) => {
          if (err) {
            return reject(err);
          }

          const isBT = data.brokerType === DEAL_SCHEME.BROKER_TRADER;
          const timer = isBT
            ? +data.dealInterval * 60 * 1000
            : moment(data.dealInterval, 'HH:mm') - moment(data.time.open);
          setTimeout(() => {
            let isWinner;
            if (data.type === DEAL_TYPE.CALL) {
              isWinner = global.currentRate > data.openValue;
            } else {
              isWinner = global.currentRate < data.openValue;
            }
            Deal.findOneAndUpdate(
              { id: data.id },
              {
                $set: {
                  closeValue: global.currentRate,
                  reward: isWinner ? data.amount * 1.8 : -res.amount,
                  status: isWinner ? DEAL_STATUS.SUCCESS : DEAL_STATUS.FAIL,
                  active: false
                },
              },
              {
                new: true,
              },
              (error, response) => {
                pubsub.publish(DEAL_ENDED, { dealEnded: response });
              },
            );
          }, timer);

          return resolve(res);
        });
      });
    },
    editDeal: (root, {
      id, closeValue, reward, status, time,
    }) => new Promise((resolve, reject) => {
      Deal.findOneAndUpdate({ id }, {
        $set: {
          id, closeValue, reward, status, time,
        },
      }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
