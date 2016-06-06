var config = require('../config');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var path = require('path');

var paths = {
  source: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions.join(',') + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
};

var imagesTask = function() {
    return gulp.src(paths.source)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        // png optimization
        optimizationLevel: production ? 3 : 1
      }))
      .pipe(gulp.dest(paths.dest));
};

gulp.task('images', imagesTask);
module.exports = imagesTask;
