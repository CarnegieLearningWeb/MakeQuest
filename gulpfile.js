'use strict';

var gulp = require('gulp');
var UglifyJS = require('uglify-js');
var map = require('vinyl-map');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');

gulp.task('uglify' , function uglifyTask() {

  var uglify = map(function (buff, filename) {
    var u = UglifyJS.minify(filename, {
      // specify `UglifyJS` options here
    });
    return u.code;
  });

  return gulp.src('src/**/*.js')
    .pipe(uglify)
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify-mini' , function uglifyTask() {

  var uglify = map(function (buff, filename) {
    var u = UglifyJS.minify(filename, {
      // specify `UglifyJS` options here
    });
    return u.code;
  });

  return gulp.src('mini/src/**/*.js')
    .pipe(uglify)
    .pipe(gulp.dest('mini/dist'));
});

gulp.task('uglify-vendor' , function uglifyTask() {

  var uglify = map(function (buff, filename) {
    var u = UglifyJS.minify(filename, {
      // specify `UglifyJS` options here
    });
    return u.code;
  });

  return gulp.src('vendor/**/*.js')
    .pipe(uglify)
    .pipe(concat('uglified-vendor.js'))
    .pipe(gulp.dest('dist/vendor'));
});

gulp.task('compress', function() {
  gulp.src('dist/*.js')
  .pipe(gzip())
  .pipe(gulp.dest('dist'));

  gulp.src('dist/vendor/*.js')
  .pipe(gzip())
  .pipe(gulp.dest('dist/vendor'));

  gulp.src('mini/libs/*.js')
  .pipe(gzip())
  .pipe(gulp.dest('mini/libs'));

  gulp.src('mini/dist/*.js')
  .pipe(gzip())
  .pipe(gulp.dest('mini/dist'));
});

gulp.task('default', ['uglify', 'uglify-mini', 'uglify-vendor']);