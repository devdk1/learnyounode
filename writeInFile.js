var fs = require('fs') 
var i = 0;

function appendFileFn(i, callback) {
    fs.appendFile('number_append.txt', i+" #-#\n", function(err, data){
        if (err) throw err;
        callback();
    })
}

(function increment() {
    if(i <= process.argv[2]){
        appendFileFn(i, increment);
        i++;
    }
})();