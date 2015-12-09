var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compress', function() {
    gulp.src('./js/**/*.js', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));

    /**** CSS *****/    
    gulp.src('./css/**/*.css', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));

    /**** Vendor fodler *****/
    gulp.src('./vendor/**/*.js', {base: './'})
    .pipe(uglify())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));

    /**** Compress bower_components *****/
    // Foundation
    gulp.src('./bower_components/foundation/js/foundation.min.js', {base: './'})
    .pipe(uglify())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));

    // jQuery
    gulp.src('./bower_components/jquery/dist/jquery.min.js', {base: './'})
    .pipe(uglify())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));

    // Modernizr
    gulp.src('./bower_components/modernizr/modernizr.js', {base: './'})
    .pipe(uglify())
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('./dist'));
});