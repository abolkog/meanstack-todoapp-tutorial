//Bring in all dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//Intiailzie app with express
const app = express();

//Database Connection
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('connected', () => {
  console.log('Connected to the database');
});
mongoose.connection.on('error',  (err) => {
  console.log(`Unable to connect to the database: ${err}`);
});

//Port to be used by the server
const _PORT = process.env.PORT;

//Start the server
app.listen(_PORT, () => {
  console.log('Server Started');
});
