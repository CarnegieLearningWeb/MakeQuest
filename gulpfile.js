var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compress', function() {
    //TODO: Serving compressed files from S3. (We're only minifying for now)
    //To use gzip with S3 we have to intercept calls and change the url depending on the content-header
    //Sample full compression with gzip:
    //gulp.src('./js/**/*.js', {base: './'})
    //.pipe(sourcemaps.init())
    //.pipe(uglify())
    //.pipe(sourcemaps.write())
    //.pipe(gzip())
    //.pipe(gulp.dest('./dist'));

    /**** APP JS *****/    
    gulp.src('./js/**/*.js', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));

    /**** CSS *****/    
    gulp.src('./css/**/*.css', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));

    /**** Vendor fodler *****/
    gulp.src('./vendor/**/*.js', {base: './'})
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

    /**** Compress bower_components *****/
    // Foundation
    gulp.src('./bower_components/foundation/js/foundation.min.js', {base: './'})
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

    // jQuery
    gulp.src('./bower_components/jquery/dist/jquery.min.js', {base: './'})
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

    // Modernizr
    gulp.src('./bower_components/modernizr/modernizr.js', {base: './'})
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});