/**
 * Deal types
 * @type {{CALL: number, PUT: number}}
 */
const DEAL_TYPE = {
  CALL: 0,
  PUT: 1,
};

const COLORS = {
  GREEN: '#46c37b',
  GREEN_DARK: '#3c763d',
  RED: '#d26a5c',
  RED_DARK: '#a94442',
};

/**
 * Deal scheme
 * @type {{BROKER_TRADER: number, TRADER_TRADER: number}}
 */
const DEAL_SCHEME = {
  BROKER_TRADER: 0,
  TRADER_TRADER: 1,
};

/**
 * Deal owner
 * @type {{USER: number, ALL: number}}
 */
const DEAL_OWNER = {
  USER: 0,
  ALL: 1,
};

const DEAL_STATUS_CAPTION = {
  SUCCESS: 'Success',
  WAITING: 'Waiting',
  FAIL: 'Fail',
};

export {
  DEAL_TYPE,
  COLORS,
  DEAL_SCHEME,
  DEAL_OWNER,
  DEAL_STATUS_CAPTION,
};
