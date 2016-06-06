var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var paths = {
    source: path.join(config.root.src, config.tasks.assets.src,'/{images,fonts}/*'),
    dest: path.join(config.root.dest, config.tasks.assets.dest)
};

var assetsTask = function () {
    return gulp.src(paths.source)
      .pipe(gulp.dest(paths.dest));
};

gulp.task('assets', assetsTask);
module.exports = assetsTask;
