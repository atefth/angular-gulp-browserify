var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require("gulp-notify");
var beep = require('./beep');

var handleError = function(task) {
    return function(err) {
        beep();
        notify.onError({
            message: task + ' failed, check the logs..',
            sound: false
        })(err);
        gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
    };
};

module.exports = handleError;
