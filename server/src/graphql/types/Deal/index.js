module.exports = `
  type Time {
    open: String!
    close: String!
  }
  input TimeInput {
    open: String!
    close: String!
  }
  type Deal {
    id: String!
    openValue: Int!
    closeValue: Int!
    amount: Int!
    reward: Int!
    status: String!
    time: Time!
  }
  type Query {
    deal(id: String!): Deal
    dealList(id: String): [Deal]
  }
  type Mutation {
    addDeal(id: String!, openValue: Int!, closeValue: Int!, amount: Int!, reward: Int!, status: String!, time: TimeInput!): Deal
    editDeal(id: String!, openValue: Int!, closeValue: Int!, amount: Int!, reward: Int!, status: String!, time: TimeInput!): Deal
    deleteDeal(id: String!, openValue: Int!, closeValue: Int!, amount: Int!, reward: Int!, status: String!, time: TimeInput!): Deal
  }
`;
