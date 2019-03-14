import gql from 'graphql-tag';

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
      },
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
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      dealInterval
      brokerType
      type
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
      openValue
      closeValue
      amount
      reward
      status
      usersPublicKey
      dealInterval
      brokerType
      type
      time {
        open
        close
      }
    }
  }
`;

const ADD_DEAL = gql`
  mutation addDeal($id: String!, $openValue: Int!, $amount: Int!, $type: Int!, $usersPublicKey: String!, $brokerType: Int!, $dealInterval: String!, $time: TimeInput!) {
    addDeal(
      id: $id,
      openValue: $openValue,
      amount: $amount,
      type: $type,
      usersPublicKey: $usersPublicKey,
      brokerType: $brokerType,
      dealInterval: $dealInterval,
      time: $time
    ) {
      id
      openValue
      amount
      status
      type
      usersPublicKey
      dealInterval
      brokerType
      time {
        open
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
      time {
        open
        close
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
};