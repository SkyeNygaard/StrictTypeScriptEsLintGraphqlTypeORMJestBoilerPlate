import { ApolloServer } from 'apollo-server';

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { createConnection } from 'typeorm';
// import typeDefs from './model/Schema.graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { BookResolver } from './resolvers/BookResolver';

// const typeDefs = `
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//
//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }
//
//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
//
// const server = new ApolloServer({ typeDefs, resolvers });
//
// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
