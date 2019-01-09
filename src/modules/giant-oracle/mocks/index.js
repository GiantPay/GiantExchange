import { DEAL_SCHEME } from '@/modules/constants';

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

const updateTime = 1 * 1000;

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
    for (let i = -300; i <= 0; i++) {
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
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
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
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
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
          open: +new Date() - (80 * 1000),
          close: +new Date() - (40 * 1000),
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
          close: +new Date() + (160 * 1000),
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
          close: +new Date() + (30560 * 1000),
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
          close: +new Date() + (200060 * 1000),
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
          close: +new Date() + (360 * 1000),
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
    const isBT = dealScheme === DEAL_SCHEME.BROKER_TRADER;
    let data = {
      id: 'broker_id',
      dealScheme: isBT ? 0 : 1,
      caption: isBT ? 'MyBroker 1' : 'MyBroker 2',
      awardMultiplier: isBT ? 1.3 : 1.5,
      rateInterval: {
        minRate: isBT ? 50 : 10,
        maxRate: isBT ? 400 : 250,
      },
      volume: 1258,
      info: 'B-T 80%/80%',
    };
    if (isBT) {
      data = {
        ...data,
        dealIntervalInMinutes: 1,
        intervalCount: 3,
      };
    } else {
      data = {
        ...data,
        buyDealEnd: 30 * 1000,
        timeSteps: 5,
      };
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getDealsPercent() {
    const data = {
      call: 60,
      put: 40,
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getAllActivitiesList() {
    const data = [
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
        },
        activity: 'Your vote has been created',
        inform: {
          inform: 'unfunded initiative created',
          details: '',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
        },
        activity: 'Your vote has been created',
        inform: {
          inform: 'funded initiative created',
          details: '',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
        },
        activity: 'Your vote has been created',
        inform: {
          inform: 'new underlying asset added',
          details: 'NewBaseAsset',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
        },
        activity: 'Your vote has been created',
        inform: {
          inform: 'new Brokers Factory added',
          details: 'NewBrokerFactory',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (680 * 1000),
          close: +new Date() - (240 * 1000),
        },
        activity: 'Your vote has been created',
        inform: {
          inform: 'new Oracle added',
          details: 'NewOracle',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: false,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative didn’t pass',
        inform: {
          inform: 'initiative didn’t pass',
          details: '',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative passed',
        inform: {
          inform: 'funding received',
          details: '',
          parameter: '150 GIC',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative passed',
        inform: {
          inform: 'new asset added',
          details: 'NewAsset',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative passed',
        inform: {
          inform: 'new oracle added',
          details: 'NewOracle',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative passed',
        inform: {
          inform: 'new broker added',
          details: 'NewBroker',
          parameter: '',
        },
      },
      {
        user: 'all',
        isActive: true,
        time: {
          open: +new Date() - (280 * 1000),
          close: +new Date() - (140 * 1000),
        },
        activity: 'Initiative passed',
        inform: {
          inform: 'platform working parameter changed',
          details: 'NewChanged',
          parameter: '',
        },
      },
      {
        user: 'my',
        isActive: true,
        time: {
          open: +new Date() - (80 * 1000),
          close: +new Date() - (40 * 1000),
        },
        activity: 'Your deal is opened',
        inform: {
          inform: 'active deal',
          details: 'dfsfe12342rfe',
          parameter: '',
        },
      },
      {
        user: 'my',
        isActive: false,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your deal is closed',
        inform: {
          inform: 'you receive a reward',
          details: 'dfsfe12342rfe',
          parameter: '15GIC',
        },
      },
      {
        user: 'my',
        isActive: true,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your deal is closed',
        inform: {
          inform: 'you receive nothing',
          details: 'dfsfe12342rfe',
          parameter: '',
        },
      },
      {
        user: 'broker',
        isActive: true,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your binary option has been created',
        inform: {
          inform: 'your binary option has been created',
          details: 'NewBroker',
          parameter: '',
        },
      },
      {
        user: 'broker',
        isActive: true,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your binary option deal has been created',
        inform: {
          inform: 'your binary option deal has been created',
          details: 'YourDeal',
          parameter: '15GIC',
        },
      },
      {
        user: 'broker',
        isActive: false,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your binary option deal has been closed',
        inform: {
          inform: 'your binary option deal has been closed. Distributed sum:',
          details: 'YourDeal',
          parameter: '120GIC',
        },
      },

      {
        user: 'oracle',
        isActive: true,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your Oracle has been accepted',
        inform: {
          inform: 'your Oracle has been accepted',
          details: 'YourOracle',
          parameter: '',
        },
      },
      {
        user: 'oracle',
        isActive: false,
        time: {
          open: +new Date(),
          close: +new Date() + (160 * 1000),
        },
        activity: 'Your Oracle has not been accepted',
        inform: {
          inform: 'your Oracle has not been accepted',
          details: 'Vote',
          parameter: '',
        },
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getCurrentVoteList() {
    const data = [
      {
        id: '1245632',
        type: 'Asset registration',
        status: 'Status',
        inform: {
          name: 'NewAsset',
          type: 'Vote',
          api: 'API',
          inform: '',
        },
      },
      {
        id: '3245632',
        type: 'Initiative registration',
        status: 'Status',
        inform: {
          name: 'NewAsset',
          type: 'Vote',
          api: 'API',
          inform: 'Amendments to dividends',
        },
      },
      {
        id: '2245632',
        type: 'Initiative registration',
        status: 'Status',
        inform: {
          name: 'NewAsset',
          type: 'Vote',
          api: 'API',
          inform: '',
        },
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getArchiveVoteList() {
    const data = [
      {
        id: '1245632',
        type: 'Asset registration',
        status: 'Accepted',
        time: {
          open: +new Date() - (300060 * 1000),
          close: +new Date() + (200060 * 1000),
        },
      },
      {
        id: '3243632',
        type: 'Initiative without funding',
        status: 'Not accepted',
        time: {
          open: +new Date() - (400060 * 1000),
          close: +new Date() + (310060 * 1000),
        },
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
};

export default GiantOracleMock;
