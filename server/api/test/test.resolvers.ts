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
      let result = { test: args.testInput };
      return result;
    },
  },
};

export default resolvers;
