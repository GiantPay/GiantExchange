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
          .sort({ time: -1 })
          .limit(300)
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res.reverse());
          });

        clearInterval(intervalId);
        intervalId = setInterval(() => {
          ChartDatav2.findOne({
            time: {
              $gt: moment()
                .utc()
                .subtract(1.5, "seconds")
                .format()
            }
          }).exec((err, res) => {
            if (res) {
              global.currentRate = res.rate;
            }
            pubsub.publish(CHART_DATA_ADDED_V2, {
              chartDataAddedv2: { rate: global.currentRate, time: res ? res.time : moment.utc().subtract(0.5, "seconds").format() }
            });
          });
        }, updateTime);
      })
  }
};
