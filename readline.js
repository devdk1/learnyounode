const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

// });

function readLineInLoop(cb) {
    for(let i = 1; i <= 10; i++){
        rl.on('line', (input) => {
            cb(input);
        });
    }
}

function log(input) {
    console.log(input);
    rl.close();
}
readLineInLoop(log);