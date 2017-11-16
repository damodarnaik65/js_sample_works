var gulp = require('gulp');
var cleanCSS =require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');
gulp.task('minify-css',function(){
  return gulp.src('style/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/style'));
});
gulp.task('minify-html',function(){
  return gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));
});
gulp.task('build',['minify-css','minify-html']);

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./**/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html','./**/*.css'], ['html','css']);
});
 
gulp.task('default', ['connect', 'watch']);
