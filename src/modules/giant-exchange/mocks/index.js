const GiantExchangeMock = {
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

export default GiantExchangeMock;
