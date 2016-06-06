var config = require('../config');
var gulp = require('gulp');
var path = require('path');

var paths = {
    source: path.join(config.root.src, config.tasks.templates.src, '**/*.html'),
    dest: path.join(config.root.dest, config.tasks.templates.dest)
};
var templateTask = function () {
    gulp.src(paths.source)
    .pipe(gulp.dest(paths.dest));
};
gulp.task('templates', templateTask);
module.exports = templateTask;
