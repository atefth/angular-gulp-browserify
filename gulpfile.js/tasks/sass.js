var config = require('../config');
var handleError = require('../lib/handleErrors');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var argv = require('yargs').argv;
var paths = {
    source: path.join(config.root.src, config.tasks.css.src, '/*.{' + config.tasks.css.extensions.join(',') + '}'),
    dest: path.join(config.root.dest, config.tasks.css.dest)
};
var production = !!argv.production;

var sassTask = function () {
    return gulp.src(paths.source)
      // sourcemaps + sass + error handling
      .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(sass({
        sourceComments: !production,
        outputStyle: production ? 'compressed' : 'nested',
      }))
      .on('error', handleError('SASS'))
      // generate .maps
      .pipe(gulpif(!production, sourcemaps.write({
        'includeContent': false,
        'sourceRoot': '.'
      })))
      // autoprefixer
      .pipe(gulpif(!production, sourcemaps.init({
        'loadMaps': true
      })))
      .pipe(postcss([autoprefixer({browsers: ['last 3 versions']})]))
      // we don't serve the source files
      // so include scss content inside the sourcemaps
      .pipe(sourcemaps.write({
        'includeContent': true
      }))
      // write sourcemaps to a specific directory
      // give it a file and save
      .pipe(gulp.dest(paths.dest));
};
gulp.task('sass', sassTask);
module.exports = sassTask;
