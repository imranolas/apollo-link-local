const { LocalLink } = require("../lib/bundle.umd");
const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { makeExecutableSchema } = require("graphql-tools");
const gql = require("graphql-tag");

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world"
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const client = new ApolloClient({
  link: new LocalLink({ schema }),
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        hello
      }
    `
  })
  .then(console.log);
