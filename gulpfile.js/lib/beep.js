var gulp = require('gulp');
var exec = require('child_process').exec;

var beep = function() {
    var os = require('os');
    var file = 'gulp/error.wav';
    if (os.platform() === 'linux') {
        // linux
        exec("aplay " + file);
    } else {
        // mac
        exec("afplay " + file);
    }
};

module.exports = beep;
