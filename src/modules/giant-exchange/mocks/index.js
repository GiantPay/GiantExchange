const GiantExchange = {
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
  getObjectTrader() {
    const data = {
      balance: '13245 GIC',
      dataRoi: '146%',
      selectedData: {
        start: new Date(2018, 0, 9),
        end: new Date(2018, 0, 18),
      },
      chartForecast: {
        title: {
          text: 'Forecast',
          subtext: 'Deals over a chosen period of time',
        },
        seriesData: [
          { name: 'Successful', value: 80 },
          { name: 'Unsuccessful ', value: 60 },
        ],
      },
      chartAmount: {
        title: {
          text: 'Amount successful forecast',
          subtext: 'Deals stats over a chosen period of time',
        },
        seriesData: [
          { name: 'Total Wins', value: 1100 },
          { name: 'Total Losses', value: 200 },
        ],
      },
      chartIncome: {
        title: {
          text: 'Income',
          subtext: 'Current period revenue',
        },
        seriesData: [
          { name: 'Gains', value: 900 },
          { name: 'Losses', value: 500 },
        ],
      },
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getObjectBroker() {
    const data = {
      balance: '43245 GIC',
      dataRoi: '146%',
      totalDeals: 1245,
      selected: null,
      option: ['Broker1', 'Broker2', 'Broker3', 'Broker4'],
      selectedData: {
        start: new Date(2018, 0, 9),
        end: new Date(2018, 0, 18),
      },
      dealsAll: 56,
      dealsTotalBinary: 36,
      dealsRevenue: '1256 GIC',
      TTtotal: 14,
      TTsum: '124 GIC',
      BTtotal: 15,
      BTsum: '124 GIC',
      chartIncome: {
        title: {
          text: 'Money made',
          subtext: 'Current period revenue',
        },
        legendData: [
          'Income', 'Loss',
        ],
        seriesData: [
          { name: 'Income', value: 900 },
          { name: 'Loss', value: 500 },
        ],
      },
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
  getObjectOracle() {
    const data = {
      balance: '113245 GIC',
      selectedData: {
        start: new Date(2018, 0, 9),
        end: new Date(2018, 0, 18),
      },
      dealsTotal: 1255,
      dealsSmartContractsTurn: 504,
      dealsRevenue: 11367,
      dealsSumOracleRevenue: 1455,
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },
};

export default GiantExchange;
