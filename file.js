var fs = require('fs');
var read_file = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(read_file.length - 1);