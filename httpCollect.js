var http = require('http');
var str = '';
    
http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        str += data;
    });
    res.on('end', function(){
        console.log(str.length);
        console.log(str);
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});