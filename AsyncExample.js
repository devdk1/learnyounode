var fs = require('fs') 
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
    writeToFile(myNumber);
  })
}

function writeToFile(myNumber) {
    fs.writeFile('number.txt', myNumber, function(err, data){
        if (err) throw err;
    })
}

function logMyNumber(){
    console.log(myNumber)
}
addOne(logMyNumber)
