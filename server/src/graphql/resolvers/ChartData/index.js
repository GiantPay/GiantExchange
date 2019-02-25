const moment = require('moment');

const ChartData = require('../../../models/ChartData');

const { PubSub } = require('apollo-server-express');

const pubsub = new PubSub();

const CHART_DATA_ADDED = 'CHART_DATA_ADDED';

let intervalId;

module.exports = {
  Subscription: {
    chartDataAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([CHART_DATA_ADDED]),
    },
  },
  Query: {
    chartDataList: () => new Promise((resolve) => {
      const getRandom = (min, max) => (Math.random() * (max - min)) + min;

      const courseDirection = () => {
        const random = Math.random();
        const changeValue = random * 20;

        if (random >= 0.5) {
          return changeValue;
        }
        return -changeValue;
      };

      let counter = -1;
      let lastRate = 0;

      const updateTime = 1000;

      const generateMockData = () => {
        counter++;

        const min = 6000;
        const max = 10000;

        lastRate = counter ? lastRate + courseDirection() : getRandom(min, max);

        return {
          rate: lastRate.toFixed(),
          volume: getRandom(0, 1000000000).toFixed(),
          time: moment().format('YYYY-MM-DD HH:mm:ss'),
        };
      };

      const rates = [];
      for (let i = -300; i <= 0; i++) {
        const data = generateMockData();
        data.time = moment(data.time) + (updateTime * i);
        data.time = moment(data.time).format('YYYY-MM-DD HH:mm:ss');
        rates.push(data);
      }

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        pubsub.publish(CHART_DATA_ADDED, { chartDataAdded: generateMockData() });
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
