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
    amount: Int
    newValue: String
    commission: Int
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
    amount: Int
    newValue: String
    commission: Int
    sourceCode: String
  }
  type Voting {
    votingTypeId: Int!
    info: Info
  }
  type Query {
    voting(votingTypeId: Int!): Voting
    votingList: [Voting]
  }
  type Mutation {
    addVoting(votingTypeId: Int!, info: InfoInput): Voting
  }
`;
