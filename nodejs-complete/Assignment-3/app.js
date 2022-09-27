const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const usersRoute = require('./routes/users');
const homeRoute = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoute);
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3333);
