'use strict';

var gulp = require('gulp');
var conf = require('./conf');

gulp.task('backend', function() {
  var backend = require('../backend/app');
  backend.set('port', conf.backend.port);
  backend.listen(conf.backend.port);
});