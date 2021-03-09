const resolvers = {
  Query: {
    sayHello: async (_, args) => {
      console.log("dd");
      let result = { test: "hello" };
      return result;
    },
  },
  Mutation: {
    doTest: async (_, args) => {
      console.log(args);
      let result = { test: args.testInput + ": 잘됩니다" };
      return result;
    },
  },
};

export default resolvers;
