var my_module = require('./module.js');
var dir_name = process.argv[2];
var ext_name = process.argv[3];

my_module(dir_name, ext_name, function(err, files) {
    files.forEach(function(file) {
        console.log(file);
    });
});