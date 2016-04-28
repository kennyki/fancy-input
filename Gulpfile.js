'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('clean', function() {
  return del('./dist');
});

gulp.task('sass', ['clean'], function() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./dist/*.css')
    // default compatibility: IE9+
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'minify-css']);