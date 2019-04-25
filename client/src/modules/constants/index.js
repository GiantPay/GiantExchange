/**
 * Deal types
 * @type {{CALL: number, PUT: number}}
 */
const DEAL_TYPE = {
  CALL: 0,
  PUT: 1
};

const COLORS = {
  GREEN: "#46c37b",
  GREEN_DARK: "#3c763d",
  RED: "#d26a5c",
  RED_DARK: "#a94442"
};

/**
 * Deal scheme
 * @type {{BROKER_TRADER: number, TRADER_TRADER: number}}
 */
const DEAL_SCHEME = {
  BROKER_TRADER: 0,
  TRADER_TRADER: 1
};

/**
 * Deal owner
 * @type {{USER: number, ALL: number}}
 */
const DEAL_OWNER = {
  USER: 0,
  ALL: 1
};

const DEAL_STATUS_CAPTION = {
  SUCCESS: "Success",
  WAITING: "Waiting",
  FAIL: "Fail"
};

const CHART = {
  OPTIONS_ARRAY_LENGTH: 3,
  AUXILIARY_LINES: 2
};

const BROKER_STATUS = {
  DISABLED: 0,
  ACTIVE: 1
};

const POPUP_TYPE = {
  BROKER: "broker",
  ORACLE: "oracle"
};

const VOTING_TYPE = {
  UPLOAD: {
    ASSET: 0,
    ORACLE: 1,
    FACTORY_BROKERS: 2
  },
  DELETE: {
    ASSET: 3,
    ORACLE: 4,
    FACTORY_BROKERS: 5
  },
  OTHER: {
    DIVIDENDS: 6,
    FUNDING_INITIATIVE: 7,
    INITIATIVE: 8,
    TRADING_OPTIONS: {
      MAX_ORACLES_IN_ASSET: 9,
      MAX_BROKERS_IN_ORACLE: 10,
      BROKER_DEACTIVATION_TIME: 11,
      ORACLE_DEACTIVATION_TIME: 12,
      SITE_COMMISSION: 13,
      NUMBER_OF_SIMULTANEOUS_TRANSACTIONS: 14
    },
    GOVERNANCE_OPTIONS: {
      DEPOSIT_AMOUNT_TO_CREATE_VOTE: 15,
      MIN_VOTING_TIME: 16,
      MAX_VOTING_TIME: 17,
      MIN_VOTE_AMOUNT: 18,
      MAX_VOTE_AMOUNT: 19,
      MIN_TURNOUT_NUMBER_OF_VOTERS: 20,
      MIN_SUPERIORITY_FOR_DECISION: 21,
      MIN_FUNDING_AMOUNT: 22,
      MAX_FUNDING_AMOUNT: 23,
      DIVIDEND_DISTRIBUTION_SCHEME: 24,
      MAX_AMOUNT_OF_DIVIDENDS: 25,
      ORACLE_MULTIPLIER: 26,
      BROKER_MULTIPLIER: 27,
      MASTERNODE_MULTIPLIER: 28
    },
    SMART_CONTRACT_CODE_CHANGE: 29
  }
};

const VOTING_TYPE_DESC = {
  0: "Asset upload",
  1: "Oracle upload",
  2: "Factory brokers upload",
  3: "Asset delete",
  4: "Oracle delete",
  5: "Factory brokers delete",
  6: "Dividends",
  7: "Funding initiate",
  8: "Initiative",
  9: "Maximum oracles in asset",
  10: "Maximum brokers in oracle",
  11: "Broker deactivation time",
  12: "Oracle deactivation time",
  13: "Site commission",
  14: "Number of simultaneous transactions",
  15: "Deposit amount to create vote",
  16: "Minimum voting time",
  17: "Maximum voting time",
  18: "Minimum vote time",
  19: "Maximum vote time",
  20: "Minimum turnout number of voters",
  21: "Minimum superiority for decision",
  22: "Minimum funding amount",
  23: "Maximum funding amount",
  24: "Dividend distribution scheme",
  25: "Maximum amount of dividends",
  26: "Oracle multiplier",
  27: "Broker multiplier",
  28: "Masternode multiplier",
  29: "Smart contract code change"
};

export {
  DEAL_TYPE,
  COLORS,
  DEAL_SCHEME,
  DEAL_OWNER,
  DEAL_STATUS_CAPTION,
  CHART,
  BROKER_STATUS,
  POPUP_TYPE,
  VOTING_TYPE,
  VOTING_TYPE_DESC
};
