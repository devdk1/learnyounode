var fs = require('fs');
fs.readFile(newFunction(), function (err, data) {
    if (err) throw err;
    var content = data.toString().split('\n');
    console.log(content.length - 1);
  });
function newFunction() {
    return 'fileAsync.js';
}
