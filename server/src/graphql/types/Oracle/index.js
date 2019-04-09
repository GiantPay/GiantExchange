module.exports = `
  type Volume {
    GIC: Int!
    BTC: Int!
    USD: Int!
  }
  type Review {
    id: String!
    name: String!
    rating: Int!
    text: String!
  }
  input VolumeInput {
    GIC: Int!
    BTC: Int!
    USD: Int!
  }
  input ReviewInput {
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
  type Oracle {
    id: String!
    pair: String!
    title: String!
    url: String!
    optionsCount: Int!
    status: Int!
    volume: Volume!
    rating: Int!
    reviewsCount: Int!
    reviews: [Review]
    statistics: [Statistic]
  }
  type Query {
    oracle(id: String!): Oracle
    oracleList: [Oracle]
  }
  type Mutation {
    addOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewInput!]): Oracle
    editOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewInput!]): Oracle
    deleteOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewInput!]): Oracle
  }
`;

