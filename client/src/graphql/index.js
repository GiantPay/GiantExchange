import gql from 'graphql-tag';

const TRADING_INFO = gql`
  query {
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
    dealList {
      id
      openValue
      closeValue
      amount
      reward
      status
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
      time {
        open
        close
      }
    }
  }
`;

const DEAL_LIST_USER = gql`
  query {
    dealList(id: $id) {
      id
      openValue
      closeValue
      amount
      reward
      status
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
};
