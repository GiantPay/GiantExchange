import axios from 'axios';

const baseURL = 'https://explorer.giantpay.network/';

/**
 * @class GiantExplorer
 * @description Giant explorer API calls
 * @see {@link https://explorer.giantpay.network/info}
 */
class GiantExplorer {
  /**
   * @method getBalance
   * @description get user balance
   * @param {String} publicKey - user's public key from extension
   * @return {Promise} promise - user's balance
   */
  static getBalance(publicKey) {
    return axios.get(`${baseURL}ext/getbalance/${publicKey}`);
  }
}

export default GiantExplorer;
