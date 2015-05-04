var Statsd = require('node-statsd');
var Config = require('./config');
var Os = require('os');

var client = new Statsd({
    host: Config.host,
    port: Config.port
});

exports.timing = function (name, value) {

    var name = Config.prefix + 'transponder.' + Os.hostname() + '.' + name;
    client.timing(name, value);
    console.log(name, value);
};
