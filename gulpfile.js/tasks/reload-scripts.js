var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var scriptsReloadTask = function () {
  browserSync.reload();
};

gulp.task('reload-scripts', ['browserify'], scriptsReloadTask);
module.exports = scriptsReloadTask;
