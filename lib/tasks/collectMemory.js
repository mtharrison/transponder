var Client = require('../client');
var Os = require('os');

exports.sample = function () {

    Client.timing('freemem', Os.freemem());
    Client.timing('usedmem', Os.totalmem() - Os.freemem());
};
