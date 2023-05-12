///// ## BOTH APPROACHES ARE NOT WORKING

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default startServerAndCreateNextHandler(server);

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";

// const resolvers = {
//   Query: {
//     hello: () => "world",
//   },
// };

// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginLandingPageDisabled()],
// });
// const { url } = await startStandaloneServer(server, {
//   context: async ({ req }) => ({ token: req.headers.token }),
//   listen: { port: 4000 },
// });
// console.log(`🚀  Server ready at ${url}`);
