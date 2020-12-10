import { ApolloServer } from 'apollo-server';

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { BookResolver } from './resolvers/BookResolver';

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver],

  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
}

main();
