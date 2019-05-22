module.exports = `
  type Subscription {
    chartDataAddedv2: ChartDatav2
  }
  type ChartDatav2 {
    id: String
    rate: Float!
    time: String!
  }
  type Query {
    chartDataListv2: [ChartDatav2]
  }
`;
