var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

var browserSyncTask = function() {

    browserSync({
        server: {
            baseDir: config.root.dest
        },
        port: process.env.PORT || 3000
    });
};

gulp.task('browser-sync', browserSyncTask);
module.exports = browserSyncTask;
