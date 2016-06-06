var config = require('../config');
var handleError = require('../lib/handleErrors');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var path = require('path');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var argv = require('yargs').argv;
var production = !!argv.production;
var build = argv._.length ? argv._[0] === 'build' : false;
var watch = argv._.length ? argv._[0] === 'watch' : true;
var paths = {
    source: path.join(config.root.src, config.tasks.scripts.src, config.tasks.scripts.main),
    dest: path.join(config.root.dest, config.tasks.scripts.dest)
};

var browserifyTask = function() {
    var bundler = browserify(paths.source, {
      debug: !production,
      cache: {}
    });
    // determine if we're doing a build
    // and if so, bypass the livereload
    if (watch) {
      bundler = watchify(bundler);
    }
    var rebundle = function() {
      return bundler.bundle()
        .on('error', handleError('Browserify'))
        .pipe(source(config.tasks.scripts.main))
        .pipe(gulpif(production, buffer()))
        .pipe(gulpif(production, uglify()))
        .pipe(gulp.dest(paths.dest));
    };
    bundler.on('update', rebundle);
    return rebundle();
};
gulp.task('browserify', browserifyTask);
module.exports = browserifyTask;
