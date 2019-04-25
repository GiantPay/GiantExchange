import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock;
if (
  process.env.NODE_ENV !== "production" ||
  process.env.NODE_ENV !== "development"
) {
  mock = new MockAdapter(axios, { delayResponse: 500 });

  mock.onGet("/api/nodes").reply(200, {
    nodes: [
      {
        id: 1,
        ip: "198.162.0.1"
      },
      {
        id: 2,
        ip: "198.162.0.2"
      }
    ]
  });

  mock.onGet("/api/activity/publicKey").reply(200, {
    id: 1,
    user: "trololo"
  });

  mock
    .onGet(
      "https://explorer.giantpay.network/ext/getbalance/GJNsa2AqtZzH5EVu1CA8J7QtFJ6PHSmeuy"
    )
    .reply(200, 799);

  mock.onGet("https://giantpay.network/api/rates").reply(200, {
    btc: 0.00005,
    usd: 0.2207256267876858
  });

  mock.onGet("https://giantpay.network/api/info").reply(200, {
    rate: 0.00005893,
    changePrice24h: 3.74,
    volume: 2.3751746540101,
    usdVolume: 9133.15,
    changeVolume24h: 1.5,
    height: 170132,
    reward: 20,
    networkHashrate: 333051001373,
    networkDifficulty: 12698.28180482,
    coinSupply: 3295307.05902989,
    masternodes: 2398,
    masternodeRoi: 175.35,
    masternodeRoiDays: 209
  });
}
