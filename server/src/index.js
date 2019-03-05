// const express = require('express');
// const expressGraphQL = require('express-graphql');
const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const schema = require('./graphql/');

mongoose.set('useFindAndModify', false);

// const app = express();
const PORT = process.env.PORT || '4040';
const db = 'mongodb://giant:giant123@ds163044.mlab.com:63044/mock-server';

const app = express();

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const apolloServer = new ApolloServer({
  ...schema,
  playground: true,
  subscriptions: {
    path: '/ws',
  },
});
apolloServer.applyMiddleware({ app });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({
  port: PORT,
  endpoint: '/graphql',
  playground: '/playground',
}, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`);
});
