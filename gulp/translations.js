var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


gulp.task('copy-translations', function() {
  return gulp.src(path.join(conf.paths.src, '/app/shared/translator/translations/*.json'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/translations')));  
});