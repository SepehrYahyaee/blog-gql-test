import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/types/index.js";
import { resolvers } from "./graphql/resolvers/index.js";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, { listen: { port: +process.env.PORT } });

console.log(`Server is ready and running on port: ${process.env.PORT}`);