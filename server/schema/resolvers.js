const { dataList } = require("./Data");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return dataList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(dataList, { id: Number(id) });
      return user;
    },
  },
};

module.exports = { resolvers };
