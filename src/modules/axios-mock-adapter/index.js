import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock;
if (process.env.NODE_ENV !== 'production') {
  mock = new MockAdapter(axios, { delayResponse: 500 });

  mock.onGet('/api/nodes')
    .reply(200, {
      nodes: [
        {
          id: 1,
          ip: '198.162.0.1',
        },
        {
          id: 2,
          ip: '198.162.0.2',
        },
      ],
    });

  mock.onGet('/api/activity/publicKey')
    .reply(200, {
      id: 1,
      user: 'trololo',
    });

  mock.onGet('https://explorer.giantpay.network/ext/getbalance/GJNsa2AqtZzH5EVu1CA8J7QtFJ6PHSmeuy')
    .reply(200, 799);
}
