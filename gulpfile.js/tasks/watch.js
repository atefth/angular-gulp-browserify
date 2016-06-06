var config = require('../config');
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');

var watchTask = function() {
  gulp.watch(path.join(config.root.src, config.tasks.css.src, '*.{' + config.tasks.css.extensions.join(',') + '}'), ['reload-sass']);
  gulp.watch(path.join(config.root.src, config.tasks.scripts.src, '**/*.{' + config.tasks.scripts.extensions.join(',') + '}'), ['lint', 'reload-scripts']);
  gulp.watch(path.join(config.root.src, config.tasks.templates.src, '**/*.html'), ['reload-templates']);
  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
};

gulp.task('watch', ['assets', 'templates', 'sass', 'browserify', 'browser-sync'], watchTask);
module.exports = watchTask;
