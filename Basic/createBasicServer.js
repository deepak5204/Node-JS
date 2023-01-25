const http = require("http");  //"http" -> handle the request and response inside node js

http.createServer((req, res) => {
    res.write("<h1>Hello, This is Deepak!</h1>");
    res.end();
}).listen(3000);