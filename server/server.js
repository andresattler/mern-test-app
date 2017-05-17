var path = require('path');
var fs = require('fs');
var express = require('express');

var indexRoutes = require('./routes/index');

var app = express();

// VIEW ENGINE
app.set('view engine', 'html');
app.engine('html', function (path, options, callback) {
  fs.read(path, 'utf-8', callback);
})

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES

app.use('/', indexRoutes);

// ERROR HANDLER

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
