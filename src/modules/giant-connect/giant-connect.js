export default {
  data: [],
  async getPingedList(data) {
    this.data = data;
    return Promise.all(this.checkPing()).then((mappedData) => {
      this.data = mappedData;
      return this.data;
    });
  },
  ping() {
    return new Promise((resolve) => {
      const randomPingValue = Math.random() * 1000;
      setTimeout(() => resolve(randomPingValue), randomPingValue);
    });
  },
  checkPing() {
    return this.data.map(async node => {
      const ping = await this.ping();
      return {
        ...node,
        ping: ping.toFixed(),
      };
    });
  },
  use(ip) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(localStorage.setItem('nodeIp', ip)), 1000);
    });
  },
};
