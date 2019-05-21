const ChartDatav2 = require('../../../models/ChartDatav2');

const { PubSub } = require('apollo-server-express');
const moment = require('moment');

const pubsub = new PubSub();

const CHART_DATA_ADDED_V2 = 'CHART_DATA_ADDED_V2';

let intervalId;


module.exports = {
  Subscription: {
    chartDataAddedv2: {
      subscribe: () => pubsub.asyncIterator([CHART_DATA_ADDED_V2]),
    },
  },
  Query: {
    chartDataListv2: () =>
      new Promise((resolve, reject) => {
        const updateTime = 1000;

        ChartDatav2.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });

        clearInterval(intervalId);
        intervalId = setInterval(() => {
          ChartDatav2.findOne(
            {
              time: {
                $gt: moment()
                  .subtract(1.5, "seconds")
                  .format()
              }
            },
            (err, doc) => {
              if (doc) {
                pubsub.publish(CHART_DATA_ADDED_V2, {
                  chartDataAddedv2: { rate: doc.rate, time: doc.time }
                });
              }
            }
          );
        }, updateTime);
      })
  }
};
