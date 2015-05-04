var Config = require('./config');
var Tasks = require('./tasks');

var sample = function () {

    for (var i = 0; i < Tasks.length; ++i) {
        Tasks[i].sample();
    }
};

setInterval(sample, Config.interval);
