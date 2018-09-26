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
    setInterval(this.pushData.bind(this), 1000);
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
      setTimeout(() => resolve(data), 1000);
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
      setTimeout(() => resolve(data), 1000);
    });
  },
  getBiggestVolumeAsset() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('btc_usd'), 1000);
    });
  },
  getAssetList() {
    return [
      {
        asset: 'BTC/USD',
        volume: 9856,
        oraclesCount: 258,
        openedOptions: 147,
      },
      {
        asset: 'ETH/USD',
        volume: 985,
        oraclesCount: 25,
        openedOptions: 14,
      },
    ];
  },
};

export default GiantOracleMock;
