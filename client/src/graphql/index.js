import gql from "graphql-tag";

const TRADING_INFO = gql`
  query TradingInfo($usersPublicKey: String) {
    brokerList {
      id
      dealScheme
      caption
      volume
      info
    }
    oracleList {
      id
      pair
      title
      url
      optionsCount
      volume {
        GIC
        BTC
        USD
      }
      reviews {
        text
        rating
      }
    }
    assetList {
      id
      asset
      volume
      members {
        oraclesCount
        openedOptions
        openedOptionsPurchases
      }
      minTraderProfit
      maxTraderProfit
    }
    dealList(usersPublicKey: $usersPublicKey) {
      id
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      dealInterval
      brokerType
      active
      type
      time {
        open
        close
      }
    }
  }
`;

const CHART_DATA = gql`
  query {
    chartDataList {
      rate
      volume
      time
    }
  }
`;

const CHART_DATA_SUB = gql`
  subscription {
    chartDataAdded {
      rate
      volume
      time
    }
  }
`;

const DEAL_LIST = gql`
  query {
    dealList {
      id
      asset
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      dealInterval
      brokerType
      type
      active
      time {
        open
        close
      }
    }
  }
`;

const DEAL_LIST_USER = gql`
  query UsersDealList($usersPublicKey: String) {
    dealList(usersPublicKey: $usersPublicKey) {
      id
      asset
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      dealInterval
      brokerType
      type
      active
      time {
        open
        close
      }
    }
  }
`;

const ADD_DEAL = gql`
  mutation addDeal(
    $id: String!
    $asset: String
    $openValue: Int!
    $amount: Int!
    $reward: Int
    $type: Int!
    $usersPublicKey: String!
    $brokerType: Int!
    $dealInterval: String!
    $time: TimeInput!
  ) {
    addDeal(
      id: $id
      asset: $asset
      openValue: $openValue
      amount: $amount
      reward: $reward
      type: $type
      usersPublicKey: $usersPublicKey
      brokerType: $brokerType
      dealInterval: $dealInterval
      time: $time
    ) {
      id
      asset
      openValue
      amount
      reward
      status
      type
      usersPublicKey
      dealInterval
      brokerType
      time {
        open
        close
      }
    }
  }
`;

const DEAL_ENDED = gql`
  subscription {
    dealEnded {
      id
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      active
      time {
        open
        close
      }
    }
  }
`;

const BROKER_DETAIL = gql`
  query BrokerDetail($id: String!) {
    broker(id: $id) {
      id
      caption
      volume
      status
      openedOptions
      rating
      reviewsCount
      reviews {
        id
        name
        rating
        text
      }
      statistics {
        label
        day
        week
        month
      }
    }
  }
`;

const ORACLE_DETAIL = gql`
  query OracleDetail($id: String!) {
    oracle(id: $id) {
      id
      title
      volume {
        GIC
        BTC
        USD
      }
      status
      optionsCount
      rating
      reviewsCount
      reviews {
        id
        name
        rating
        text
      }
      statistics {
        label
        day
        week
        month
      }
    }
  }
`;

const ADD_VOTING = gql`
  mutation addVoting($votingTypeId: Int!, $info: InfoInput) {
    addVoting(votingTypeId: $votingTypeId, info: $info) {
      id
      votingTypeId
    }
  }
`;

const VOTING_LIST = gql`
  query {
    votingList {
      id
      createdAt
      votingTypeId
      status
      info {
        id
        rationale
        url
        name
        type
        json
        optionType
        brokerScheme
        justification
        description
        address
        amount
        newValue
        commission
        sourceCode
      }
    }
  }
`;

export {
  TRADING_INFO,
  CHART_DATA,
  CHART_DATA_SUB,
  DEAL_LIST,
  DEAL_LIST_USER,
  ADD_DEAL,
  DEAL_ENDED,
  BROKER_DETAIL,
  ORACLE_DETAIL,
  ADD_VOTING,
  VOTING_LIST
};
