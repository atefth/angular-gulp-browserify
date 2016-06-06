var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var beep = require('../lib/beep');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var lintTask = function() {
    var glob = path.join(config.root.src, config.tasks.scripts.src, '**/*.{' + config.tasks.scripts.extensions.join(',') + '}');

    return gulp.src(['gulpfile.js', glob]).pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .on('error', function() {
        beep();
      });

};

gulp.task('lint', lintTask);
module.exports = lintTask;
