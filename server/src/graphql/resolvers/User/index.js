const User = require('../../../models/User');

module.exports = {
  Query: {
    user: (root, args) => new Promise((resolve, reject) => {
      User.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    users: () => new Promise((resolve, reject) => {
      User.find({})
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addUser: (root, { id, name, email }) => {
      const newUser = new User({ id, name, email });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: (root, { id, name, email }) => new Promise((resolve, reject) => {
      User.findOneAndUpdate({ id }, { $set: { name, email } })
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
    deleteUser: (root, args) => new Promise((resolve, reject) => {
      User.findOneAndRemove(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
