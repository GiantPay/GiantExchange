module.exports = `
  type Members {
    oraclesCount: Int!
    openedOptions: Int!
    openedOptionsPurchases: Int!
  }
  input MembersInput {
    oraclesCount: Int!
    openedOptions: Int!
    openedOptionsPurchases: Int!
  }
  type Asset {
    id: String!
    asset: String!
    volume: Int!
    members: Members!
    minTraderProfit: Int!
    maxTraderProfit: Int!
  }
  type Query {
    asset(id: String!): Asset
    assetList: [Asset]
  }
  type Mutation {
    addAsset(id: String!, asset: String!, volume: Int!, members: MembersInput!, minTraderProfit: Int!, maxTraderProfit: Int!): Asset
    editAsset(id: String!, asset: String!, volume: Int!, members: MembersInput!, minTraderProfit: Int!, maxTraderProfit: Int!): Asset
    deleteAsset(id: String!, asset: String!, volume: Int!, members: MembersInput!, minTraderProfit: Int!, maxTraderProfit: Int!): Asset
  }
`;

