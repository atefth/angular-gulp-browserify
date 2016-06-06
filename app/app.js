require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
$ = jQuery = require('jquery');
require('bootstrap-sass');

var app = angular.module('app', ['ui.router', 'ngMaterial']);

require('./controllers');
