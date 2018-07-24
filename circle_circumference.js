var circle = require('./moduleExe.js');
// console.log(`The area of a circle of radius `+process.argv[2]+` is `+area(+process.argv[2]));
console.log(circle(+process.argv[2]));
console.log(`The circumference of a circle of radius `+process.argv[2]+` is ${circle.circumference(+process.argv[2])}`);
