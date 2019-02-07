module.exports = `
  type Broker {
    id: String!
    dealScheme: Int!
    caption: String!
    volume: Int!
    info: String!
  }
  type Query {
    broker(id: String!): Broker
    brokerList: [Broker]
  }
  type Mutation {
    addBroker(id: String!, dealScheme: Int!, caption: String!, volume: Int!, info: String!): Broker
    editBroker(id: String!, dealScheme: Int!, caption: String!, volume: Int!, info: String!): Broker
    deleteBroker(id: String!, dealScheme: Int!, caption: String!, volume: Int!, info: String!): Broker
  }
`;
