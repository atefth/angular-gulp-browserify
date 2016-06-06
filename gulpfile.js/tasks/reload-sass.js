var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sassReloadTask = function () {
  browserSync.reload();
};

gulp.task('reload-sass', ['sass'], sassReloadTask);
module.exports = sassReloadTask;
