var fs = require('fs');
var path = require('path');

function fileAsyncByModule(dir_name, ext_name, cb) {
    ext_name = '.' + ext_name;
    fs.readdir(dir_name, function(err, data) {
        if(err)
            return cb(err);
        var files = [];
        data.forEach(function(list) {
            if(path.extname(list) == ext_name)
                files.push(list);
        });
        return cb(null, files);
   }); 
}
module.exports =  fileAsyncByModule;
