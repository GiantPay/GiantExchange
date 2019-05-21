module.exports = `
  type Subscription {
    dealEnded: Deal
  }
  type Time {
    open: String!
    close: String
  }
  input TimeInput {
    open: String!
    close: String
  }
  type Deal {
    id: String!
    asset: String
    openValue: Int!
    closeValue: Int
    amount: Int!
    reward: Int
    status: String
    type: Int!
    usersPublicKey: String!
    brokerType: Int!
    dealInterval: String!
    active: Boolean
    time: Time!
  }
  type Query {
    deal(id: String!): Deal
    dealList(usersPublicKey: String): [Deal]
  }
  type Mutation {
    addDeal(id: String!, asset: String, openValue: Int!, closeValue: Int, amount: Int!, reward: Int, status: String, type: Int!, usersPublicKey: String!, brokerType: Int!, dealInterval: String!, time: TimeInput!): Deal
    editDeal(id: String!, openValue: Int!, closeValue: Int, amount: Int!, reward: Int, status: String, type: Int!, usersPublicKey: String!, brokerType: Int!, dealInterval: String!, time: TimeInput!): Deal
  }
`;
