const Voting = require('../../../models/Voting');

const moment = require('moment');

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
      const id = (Math.random() * 1000).toString();
      const createdAt = moment().format();
      const newVoting = new Voting({
        id, createdAt, votingTypeId, info, status: 'Active',
      });

      return new Promise((resolve, reject) => {
        newVoting.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};
