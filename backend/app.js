'use strict';

var sleep = function(milliseconds) {
  var start = new Date().getTime();
  while(true) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var _ = require('lodash');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());


//------------
// Users
//------------
var users = require('./json/users.json');
app.get('/api/v1/users', function(req, res) {
  sleep(200);
  res.send(users);
});
app.get('/api/v1/users/:userId', function(req, res, next) {
  var user = _.find(users, {'userId': req.params.userId});
  if(user) {
    res.send(user);
  } else {
    next();
  }
});
//------------
// 404
//------------
app.all('/*', function(req, res) {
  res.sendStatus(404);
});

module.exports = app;
