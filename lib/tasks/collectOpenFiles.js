var ChildProcess = require('child_process');
var Client = require('../client');
var Fs = require('fs');

exports.sample = function () {

    var procFile = '/proc/sys/fs/file-nr';

    Fs.exists(procFile, function (exists) {

        if (exists) {
            ChildProcess.exec('cat ' + procFile, function (err, stdout, stderr) {

                if (err) {
                    throw err;
                }

                var files = stdout.match(/[0-9]+/g);

                Client.timing('fileusage', 100 * (parseInt(files[0]) / parseInt(files[2])));
            });
        }
    });
};
