var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var extname = '.' + process.argv[3];

fs.readdir(pathname, function cb(err, lists){
    if(err) throw err;
    lists.forEach(function(list) {
      if(path.extname(list) == extname) { console.log(list); }
    });
});
