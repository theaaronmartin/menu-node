const express = require('express'),
          logger = require('morgan'),
          bodyParser = require('body-parser'),
          mongoose = require('mongoose');

const app = express();

// Database

mongoose.connect('mongodb://localhost/menu-node');

const db = mongoose.connection;
db.on('error', function(err) {
  console.error(err);
});
db.once('open', function() {
  console.log('Connected to menu-node databse.');
});

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Routes
app.use('/menus', require('./routes/menus'));

// Run Application
app.listen(3000, function () {
  console.log('Menu is running!');
});
