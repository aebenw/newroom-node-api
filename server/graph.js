// Just working with Apollo and testing it routes
// Hope to build a server and choose between normal API or Apollo

require('./config/config')
const express = require('express');
// const { mongoose } = require('./db/mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import NewsAPI from './graphql/dataSources/newsAPI'


// const routes = require('./routes/routes');

const app = express();
app.use(cors());
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      newsAPI: new NewsAPI()
    })
  })

server.applyMiddleware({app})

// routes(app);


app.listen(3001, () => console.log(`started up on localhost:3001${server.graphqlPath}`));

module.exports = {app};
