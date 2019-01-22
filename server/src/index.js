// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const morgan = require('morgan');
// const config = require('./config/config');
//
// const app = express();
//
// app.use(morgan('combined'));
// app.use(bodyParser.json());
// app.use(cors());
//
// app.listen(
//   process.env.PORT || config.port,
//   () => console.log(`Server start on port ${config.port} ...`),
// );
//
// app.get('/api/posts', (req, res) => {
//   res.send([{
//     title: 'Hello World!',
//     description: 'Hi there! How are you?',
//   }]);
// });

import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from './graphql/';

const app = express();
const PORT = process.env.PORT || '4000';
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
