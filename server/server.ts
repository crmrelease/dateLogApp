const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
import { ApolloServer } from 'apollo-server-express';
import schema from './schema'

const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {
      // 'editor.theme': 'light',
    },
    // tabs: [
    //   {
    //     endpoint,
    //     query: defaultQuery,
    //   },
    // ],
  },
});

const app = express().use(bodyParser.json());

app.listen({ port: 4000 },()=> {
  // console.log(args);
  // console.dir(apolloServer);
  const url = 'http://localhost:' + 4000 + apolloServer.graphqlPath;
  console.log(`✔ Apollo Server ready at ${url}\n\n\n`);
});