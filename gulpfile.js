'use strict'

var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload');

// // task for change html
// gulp.task('html',function(){
// 	gulp.src('index.html');
// });

// task for css
gulp.task('css', function () {
	gulp.src('css/*.css')
    .pipe(concatCss("main.min.css"))
    .pipe(autoprefixer('last 10 version'))
    .pipe(minifyCss())
    .pipe(gulp.dest('min/css/'));
});

// task for JS 
gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('min/js'));
});

// taks for watch change files
gulp.task('watch', function(){
	gulp.watch('css/*.css', ['css']);
	gulp.watch('js/*.js', ['js']);
});

// default task
gulp.task('default', ['css','js','watch']);