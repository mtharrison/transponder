var ChildProcess = require('child_process');
var Client = require('../client');

exports.sample = function () {

    ChildProcess.exec('df -h', function (err, stdout, stderr) {

        if (err) {
            throw err;
        }

        Client.timing('diskusage', parseInt(stdout.match(/([0-9]+)%/)[1]));
    });
};
