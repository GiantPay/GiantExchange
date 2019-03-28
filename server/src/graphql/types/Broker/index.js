module.exports = `
  type Broker {
    id: String!
    dealScheme: Int!
    caption: String!
    volume: Int!
    info: String!
    openedOptions: Int!
    rating: Int!
    reviewsCount: Int!
    reviews: [Review]
    statistics: [Statistic]
  }
  type Review {
    id: String!
    name: String!
    rating: Int!
    text: String!
  }
  type Statistic {
    label: String!
    day: Int!
    week: Int!
    month: Int!
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
