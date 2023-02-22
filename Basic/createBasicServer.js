const http = require("http");  //"http" -> handle the request and response inside node js
                               // http give us networking capability such as building an http server

// http.createServer((req, res) => {
//     res.write("<h1>Hello, This is Deepak!</h1>");
//     res.end();
// }).listen(3000);


const server = http.createServer((req, res) => {
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', ()  => {
    console.log('Listening to requests on port 8000');
});