const Voting = require('../../../models/Voting');

module.exports = {
  Query: {
    voting: (root, args) => new Promise((resolve, reject) => {
      Voting.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    votingList: () => new Promise((resolve, reject) => {
      Voting.find({})
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addVoting: (root, {
      votingTypeId, info,
    }) => {
      const newVoting = new Voting({
        votingTypeId, info,
      });

      return new Promise((resolve, reject) => {
        newVoting.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};
