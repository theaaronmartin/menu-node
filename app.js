const express = require('express'),
          logger = require('morgan'),
          bodyParser = require('body-parser'),
          mongoose = require('mongoose');

const app = express();

// Database

mongoose.connect('mongodb://localhost/menu-node');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/menus', require('./routes/menus'));

app.listen(3000, function () {
  console.log('Menu is running!');
});
