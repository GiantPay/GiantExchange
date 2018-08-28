import axios from 'axios';
import '@/modules/axios-mock-adapter';

describe('Axios mock', () => {
  it('GET request on /api/nodes', async () => {
    const nodes = await axios.get('/api/nodes');
    expect(nodes.data.nodes).toBeTruthy();
  });

  it('GET request on /api/activity/publicKey', async () => {
    const nodes = await axios.get('/api/activity/publicKey');
    expect(nodes.data.user).toBe('trololo');
  });
});
