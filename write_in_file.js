var fs = require('fs');
fs.writeFile('number.txt', 2, function(err, data){
    if(err)
        throw err;
})
