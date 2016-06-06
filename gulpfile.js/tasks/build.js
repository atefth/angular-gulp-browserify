var gulp = require('gulp');

var buildTask = ['clean', 'templates', 'assets', 'sass', 'browserify'];
gulp.task('build', buildTask);
