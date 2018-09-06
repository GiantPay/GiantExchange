import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock;
if (process.env.NODE_ENV !== 'production') {
  mock = new MockAdapter(axios);

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
}
