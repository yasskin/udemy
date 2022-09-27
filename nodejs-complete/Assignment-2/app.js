const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('Log something to the console');
  res.send('<h1>Assignment 2 Users!</h1>');
  next();
});

app.use('/', (req, res, next) => {
  console.log('Log something else to the console.');
  // return a response
  res.send('<h1>Assignment 2</h1>');
});

app.listen(3002);
