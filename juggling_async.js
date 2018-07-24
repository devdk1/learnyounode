var http = require('http');
var i = 2;

function jugglingAsync(i, callback) {
        var str = '';
        http.get(process.argv[i], (res) => {
            res.setEncoding('utf8');
            res.on('data', (data) => {
                str += data;
            });
            res.on('end', function(){
                callback();
                console.log(str);
            })
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
}

(function increment() {
    if(i <= 4){
        jugglingAsync(i, increment);
        i++;
    }
})();