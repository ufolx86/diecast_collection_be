const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const accountRoutes = require('./routes/account');

const mongoConnect = require('./util/database').mongoConnect;

const app = express();

// app.use(bodyParser.urlencoded()); // -> TYPICAL FOR FORM DATA x-www-form-urlencoded <form>

app.use(bodyParser.json());

app.use((req, res, next) => {
  // TODO: SET CORRECT CLIENT
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Which methods are allowed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  // Headers clients might set
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// // Defaults to '/', so if there is no Route, '/' should be it
// app.use((req, res, next) => {
//   res.send('<h1>Hello from express</h1>')
// });

app.use('/account', accountRoutes);


mongoConnect((client)=> {
  console.log(client);
  app.listen(3002);
})