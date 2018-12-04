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

const updateTime = 5 * 1000;

const generateMockData = () => {
  counter++;

  const min = 6000;
  const max = 10000;

  lastRate = counter ? lastRate + courseDirection() : getRandom(min, max);

  return {
    rate: lastRate,
    volume: getRandom(0, 1000000000),
    time: new Date(),
  };
};

const GiantOracleMock = {
  _callbacks: new Map(),
  on(event, cb) {
    this._callbacks.set(event, cb);
  },
  pushData() {
    const data = generateMockData();
    if (this._callbacks.get('data')) {
      this._callbacks.get('data')(data);
    }
  },
  runInterval() {
    return setInterval(this.pushData.bind(this), updateTime);
  },
  getLastRates() {
    const rates = [];
    for (let i = -118; i <= 0; i++) {
      const data = generateMockData();
      data.time = +data.time + (updateTime * i);
      rates.push(data);
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(rates), 500);
    });
  },
  getOracleData() {
    const data = {
      pair: 'BTC/USD',
      title: 'Main title',
      url: 'https://oracle.giant.exchange',
      optionsCount: 159,
      volume: {
        GIC: 9588,
        BTC: 130,
        USD: 50777,
      },
      reviews: [
        {
          rating: 4,
          text: 'Lorem',
        },
        {
          rating: 3,
          text: 'Lorem ipsum',
        },
      ],
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getOracleList() {
    const data = [
      {
        id: 'main_title',
        pair: 'BTC/USD',
        title: 'Main title',
        url: 'https://oracle.giant.exchange',
        optionsCount: 159,
        volume: {
          GIC: 9588,
          BTC: 130,
          USD: 50777,
        },
        reviews: [
          {
            rating: 4,
            text: 'Lorem',
          },
          {
            rating: 3,
            text: 'Lorem ipsum',
          },
        ],
      },
      {
        id: 'main_title_2',
        pair: 'BTC/USD',
        title: 'Main title 2',
        url: 'https://oracle2.giant.exchange',
        optionsCount: 189,
        volume: {
          GIC: 999,
          BTC: 55,
          USD: 777,
        },
        reviews: [
          {
            rating: 4,
            text: 'Lorem',
          },
        ],
      },
      {
        id: 'main_title_3',
        pair: 'BTC/USD',
        title: 'Main title 3',
        url: 'https://oracle3.giant.exchange',
        optionsCount: 189,
        volume: {
          GIC: 999,
          BTC: 55,
          USD: 777,
        },
        reviews: [
          {
            rating: 4,
            text: 'Lorem',
          },
        ],
      },
      {
        id: 'main_title_4',
        pair: 'BTC/USD',
        title: 'Main title 4',
        url: 'https://oracle4.giant.exchange',
        optionsCount: 189,
        volume: {
          GIC: 999,
          BTC: 55,
          USD: 777,
        },
        reviews: [
          {
            rating: 4,
            text: 'Lorem',
          },
        ],
      },
      {
        id: 'main_title_5',
        pair: 'BTC/USD',
        title: 'Main title 5',
        url: 'https://oracle5.giant.exchange',
        optionsCount: 189,
        volume: {
          GIC: 999,
          BTC: 55,
          USD: 777,
        },
        reviews: [
          {
            rating: 4,
            text: 'Lorem',
          },
        ],
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getBiggestVolumeAsset() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('btc_usd'), 500);
    });
  },
  getAssetList() {
    return [
      {
        id: 'btc_usd',
        asset: 'BTC/USD',
        volume: 9856,
        members: {
          oraclesCount: 258,
          openedOptions: 147,
          openedOptionsPurchases: 255,
        },
        minTraderProfit: 12,
        maxTraderProfit: 78,
      },
      {
        id: 'eth_usd',
        asset: 'ETH/USD',
        volume: 850,
        members: {
          oraclesCount: 25,
          openedOptions: 14,
          openedOptionsPurchases: 25,
        },
        minTraderProfit: 18,
        maxTraderProfit: 98,
      },
      {
        id: 'btc_gic',
        asset: 'BTC/GIC',
        volume: 985,
        members: {
          oraclesCount: 25,
          openedOptions: 145,
          openedOptionsPurchases: 25,
        },
        minTraderProfit: 18,
        maxTraderProfit: 102,
      },
      {
        id: 'btc_xrp',
        asset: 'BTC/XRP',
        volume: 15,
        members: {
          oraclesCount: 25,
          openedOptions: 145,
          openedOptionsPurchases: 250,
        },
        minTraderProfit: 25,
        maxTraderProfit: 55,
      },
    ];
  },
  getUserDeals() {
    const data = [
      {
        id: 'dfsfe12342rfe',
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
      {
        id: 'dfsfe12342rfe',
        time: {
          open: +new Date() + (5 * 1000),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '0',
        status: 'Fail',
      },
      {
        id: 'dfsfe12342rfe',
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
      {
        id: 'dfsfe12342rfe',
        time: {
          open: +new Date() + (30 * 1000),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getAllDeals() {
    const data = [
      {
        id: '123sfe12342rfe',
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
      {
        id: '123fe12342rfe',
        time: {
          open: +new Date() + (5 * 1000),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
      {
        id: '123fe12342rfe',
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
      {
        id: '123fe12342rfe',
        time: {
          open: +new Date() + (30 * 1000),
          close: +new Date() + (60 * 1000),
        },
        openValue: 6000,
        closeValue: 6500,
        amount: '100 GIC',
        reward: '130 GIC',
        status: 'Success',
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getBrokerList() {
    const data = [
      {
        id: 'my-broker-1',
        dealScheme: 0,
        caption: 'MyBroker 1',
        volume: 1500,
        info: 'B-T 80%/80%',
      },
      {
        id: 'my-broker-2',
        dealScheme: 1,
        caption: 'MyBroker 2',
        volume: 1258,
        info: 'T-T 2%',
      },
      {
        id: 'my-broker-3',
        dealScheme: 0,
        caption: 'MyBroker 3',
        volume: 856,
        info: 'B-T 80%/80%',
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getAllTransaction() {
    const data = [
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: false,
        assets: 'BTC/GIC',
        price: '112 GIC',
        reward: 0,
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: false,
        assets: 'BTC/GIC',
        price: '123 GIC',
        reward: '15 GIC 13%',
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: false,
        assets: 'ETH/USD',
        price: '23 GIC',
        reward: 0,
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: true,
        assets: 'BTC/USD',
        price: '16 GIC',
        reward: '15 GIC 15%',
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: true,
        assets: 'BTC/GIC',
        price: '11 GIC',
        reward: '16 GIC 15%',
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: true,
        assets: 'BTC/GIC',
        price: '18 GIC',
        reward: '18 GIC 15%',
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
      {
        time: {
          open: +new Date(),
          close: +new Date() + (60 * 1000),
        },
        status: 'Success',
        isActive: true,
        assets: 'ETH/USD',
        price: '23 GIC',
        reward: '32 GIC 15%',
        inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getCurrentBroker(dealScheme) {
    const data = {
      id: 'broker_id',
      dealScheme: dealScheme === 0 ? 0 : 1,
      caption: dealScheme === 0 ? 'MyBroker 1' : 'MyBroker 2',
      awardMultiplier: dealScheme === 0 ? 1.3 : 1.5,
      dealIntervalInMinutes: dealScheme === 0 ? 1 : 2,
      timeSteps: dealScheme === 0 ? 3 : 5,
      volume: 1258,
      info: 'B-T 80%/80%',
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
};

export default GiantOracleMock;
