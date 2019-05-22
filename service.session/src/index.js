import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import morgan from 'morgan';
import typeDefs from './app/graphql/schemas';
import resolvers from './app/graphql/resolvers';

const app = express();
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });

app.use(morgan('tiny'));

server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('ola mundo'));

app.listen(PORT, _ =>
  console.log(`🚀 http://localhost:${PORT}${server.graphqlPath}`)
);
