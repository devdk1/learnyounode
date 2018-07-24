var http = require('http');
var bl = require('bl');
var count = 0;
var result = [];

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(req, res){
    res.pipe(bl, function(err, data){
      if(err)
        return console.error(err);
      
      result[index] = data.toString();
      count++;
      if(count == 3)
        printResults();
      });
  })
}

for(let i = 0; i < 3; i++)
  httpGet(i);
