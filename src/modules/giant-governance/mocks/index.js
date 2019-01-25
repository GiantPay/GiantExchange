const GiantGovernance = {
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
      options: [
        { value: null, text: 'All brokers' },
        { value: 'Broker 1', text: 'Broker 1' },
        { value: 'Broker 2', text: 'Broker 2' },
        { value: 'Broker 3', text: 'Broker 3' },
        { value: 'Broker 4', text: 'Broker 4' },
      ],
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

export default GiantGovernance;
