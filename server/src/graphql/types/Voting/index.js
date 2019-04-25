module.exports = `
  type Info {
    id: String
    rationale: String
    url: String
    name: String
    type: String
    json: String
    optionType: String
    brokerScheme: String
    justification: String
    description: String
    address: String
    amount: Float
    newValue: String
    commission: Float
    sourceCode: String
  }
  input InfoInput {
    id: String
    rationale: String
    url: String
    name: String
    type: String
    json: String
    optionType: String
    brokerScheme: String
    justification: String
    description: String
    address: String
    amount: Float
    newValue: String
    commission: Float
    sourceCode: String
  }
  type Voting {
    id: String
    createdAt: String
    votingTypeId: Int!
    status: String
    info: Info
  }
  type Query {
    voting(id: String!): Voting
    votingList: [Voting]
  }
  type Mutation {
    addVoting(votingTypeId: Int!, info: InfoInput): Voting
  }
`;
