var Client = require('../client');
var Os = require('os');

exports.sample = function () {

    Client.timing('loadavg', Os.loadavg()[0]);
};
