const bami = {
  name: "Bami",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => bami,
  },
};

export default resolvers;
