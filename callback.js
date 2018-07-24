
var fs = require('fs');
var price = undefined;
function doSomethingOldStyle(arr, successCallback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents)
        arr['price'] = myNumber;
        successCallback(arr)
      })
  }
  
  function successCallback(result) {
    console.log("It succeeded with " + result.price);
    price = result.price;
  }
  
  console.log(price);
  var arr = {};
  doSomethingOldStyle(arr, successCallback);