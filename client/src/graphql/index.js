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
  }
`;

const ORACLE_LIST = gql`
  query {
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
  }
`;

export {
  TRADING_INFO,
  ORACLE_LIST,
};
