const { dataList } = require("./Data");
const resolvers = {
  Query: {
    users() {
      return dataList;
    },
  },
};

module.exports = { resolvers };
