var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var templatesReloadTask = function () {
  browserSync.reload();
};

gulp.task('reload-scripts', ['templates'], templatesReloadTask);
module.exports = templatesReloadTask;
