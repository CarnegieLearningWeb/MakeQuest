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

    /**** VENDOR *****/
    // js
    gulp.src('./vendor/**/*.js', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
    // css
    gulp.src('./vendor/**/*.css', {base: './'})
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});