module.exports = `
  type Volume {
    GIC: Int!
    BTC: Int!
    USD: Int!
  }
  type Reviews {
    rating: Int!
    text: String!
  }
  input VolumeInput {
    GIC: Int!
    BTC: Int!
    USD: Int!
  }
  input ReviewsInput {
    rating: Int!
    text: String!
  }
  type Oracle {
    id: String!
    pair: String!
    title: String!
    url: String!
    optionsCount: Int!
    volume: Volume!
    reviews: [Reviews]
  }
  type Query {
    oracle(id: String!): Oracle
    oracleList: [Oracle]
  }
  type Mutation {
    addOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewsInput!]): Oracle
    editOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewsInput!]): Oracle
    deleteOracle(id: String!, pair: String!, title: String!, url: String!, optionsCount: Int!, volume: VolumeInput!, reviews: [ReviewsInput!]): Oracle
  }
`;

