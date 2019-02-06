import Oracle from '../../../models/Oracle';

export default {
  Query: {
    oracle: (root, args) => new Promise((resolve, reject) => {
      Oracle.findOne(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    oracleList: () => new Promise((resolve, reject) => {
      Oracle.find({})
        .populate()
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
    }),
  },
  Mutation: {
    addOracle: (root, {
      id, pair, title, url, optionsCount, volume, reviews,
    }) => {
      const newOracle = new Oracle({
        id, pair, title, url, optionsCount, volume, reviews,
      });

      return new Promise((resolve, reject) => {
        newOracle.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editOracle: (root, {
      id, pair, title, url, optionsCount, volume, reviews,
    }) => new Promise((resolve, reject) => {
      Oracle.findOneAndUpdate({ id }, {
        $set: {
          id, pair, title, url, optionsCount, volume, reviews,
        },
      }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
    deleteOracle: (root, args) => new Promise((resolve, reject) => {
      Oracle.findOneAndRemove(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    }),
  },
};
