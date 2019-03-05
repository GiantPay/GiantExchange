const moment = require('moment');

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
let mockData = {};

const generateMockData = () => {
  counter++;

  const min = 6000;
  const max = 10000;

  lastRate = counter ? lastRate + courseDirection() : getRandom(min, max);

  mockData = {
    rate: lastRate.toFixed(),
    volume: getRandom(0, 1000000000).toFixed(),
    time: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  return mockData;
};

module.exports.generateMockData = generateMockData;
