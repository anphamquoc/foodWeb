const userResolver = {
  Query: {
    hello: () => {
      return "Hello world";
    },
  },
};

module.exports = userResolver;
