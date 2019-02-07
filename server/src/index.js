const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./graphql/');

const app = express();
const PORT = process.env.PORT || '4040';
const db = 'mongodb://giant:giant123@ds163044.mlab.com:63044/mock-server';

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

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
