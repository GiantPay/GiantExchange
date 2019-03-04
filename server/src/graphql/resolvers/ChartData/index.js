const ChartData = require('../../../models/ChartData');

const { PubSub } = require('apollo-server-express');
const moment = require('moment');

const { generateMockData } = require('../../../modules');

const pubsub = new PubSub();

const CHART_DATA_ADDED = 'CHART_DATA_ADDED';

let intervalId;


module.exports = {
  Subscription: {
    chartDataAdded: {
      subscribe: () => pubsub.asyncIterator([CHART_DATA_ADDED]),
    },
  },
  Query: {
    chartDataList: () => new Promise((resolve) => {
      const updateTime = 1000;

      const rates = [];
      for (let i = -300; i <= 0; i++) {
        const data = generateMockData();
        data.time = moment(data.time) + (updateTime * i);
        data.time = moment(data.time).format('YYYY-MM-DD HH:mm:ss');
        rates.push(data);
      }

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        const mockData = generateMockData();
        global.currentRate = mockData.rate;
        pubsub.publish(CHART_DATA_ADDED, { chartDataAdded: mockData });
      }, updateTime);

      return resolve(rates);
    }),
  },
  Mutation: {
    addChartData: (root, {
      id, dealScheme, caption, volume, info,
    }) => {
      const newChartData = new ChartData({
        id, dealScheme, caption, volume, info,
      });

      return new Promise((resolve, reject) => {
        newChartData.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};
