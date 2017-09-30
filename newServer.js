var http = require('http');

http.createServer(function (request, response){
    response.writeHead('200');
    response.write(`<button><a href=http://`+request.headers.host+`/about>About</a></button>`);
    response.write(`&nbsp<button><a href=http://`+request.headers.host+`/home>Home</a></button>`);
    response.write(`<h1>This is ${ request.url.split('/')[1].toUpperCase() } Tab</h1>`);
    response.end();
}).listen(3000);
console.log("Hey Dev! Server is running at http://localhost:3000");