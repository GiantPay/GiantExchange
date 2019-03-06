module.exports = `
  type Subscription {
    chartDataAdded: ChartData
  }
  type ChartData {
    rate: Int!
    volume: Int!
    time: String!
  }
  type Query {
    chartDataList: [ChartData]
  }
  type Mutation {
    addChartData(rate: Int!, volume: Int!, time: String!): ChartData
  }
`;
